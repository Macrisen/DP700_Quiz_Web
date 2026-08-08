// State Management
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: "A" } or { questionId: ["A", "B"] } or { questionId: { r1: "Yes", r2: "No" } }
let bookmarkedQuestions = new Set();
let isSubmitted = false;
let quizMode = 'practice'; // 'practice' or 'exam'
let activeFilter = 'all'; // 'all', 'answered', 'unanswered', 'bookmarked', 'wrong'
let timerInterval = null;
let secondsElapsed = 0;

// Initialize Web App
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  initUI();
  renderQuestion(currentQuestionIndex);
  renderMatrix();
  startTimer();
});

function loadSavedState() {
  const savedAnswers = localStorage.getItem('dp700_answers');
  if (savedAnswers) userAnswers = JSON.parse(savedAnswers);
  
  const savedBookmarks = localStorage.getItem('dp700_bookmarks');
  if (savedBookmarks) bookmarkedQuestions = new Set(JSON.parse(savedBookmarks));

  const savedMode = localStorage.getItem('dp700_mode');
  if (savedMode) quizMode = savedMode;

  const savedIndex = localStorage.getItem('dp700_current_idx');
  if (savedIndex) currentQuestionIndex = parseInt(savedIndex) || 0;

  const savedOrder = localStorage.getItem('dp700_order');
  if (savedOrder) {
    try {
      const orderIds = JSON.parse(savedOrder);
      const orderMap = new Map();
      orderIds.forEach((id, index) => orderMap.set(id, index));
      quizData.sort((a, b) => {
        const idxA = orderMap.has(a.id) ? orderMap.get(a.id) : Infinity;
        const idxB = orderMap.has(b.id) ? orderMap.get(b.id) : Infinity;
        return idxA - idxB;
      });
    } catch(e) {}
  }
}

function saveState() {
  localStorage.setItem('dp700_answers', JSON.stringify(userAnswers));
  localStorage.setItem('dp700_bookmarks', JSON.stringify(Array.from(bookmarkedQuestions)));
  localStorage.setItem('dp700_mode', quizMode);
  localStorage.setItem('dp700_current_idx', currentQuestionIndex);

  const orderIds = quizData.map(q => q.id);
  localStorage.setItem('dp700_order', JSON.stringify(orderIds));
}

function initUI() {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    document.body.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
  });

  // Mode Selector
  const modeSelect = document.getElementById('modeSelect');
  modeSelect.value = quizMode;
  modeSelect.addEventListener('change', (e) => {
    quizMode = e.target.value;
    saveState();
    renderQuestion(currentQuestionIndex);
    renderMatrix();
  });

  // Filter Buttons
  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');
      renderMatrix();
    });
  });

  // Navigation Buttons
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('bookmarkBtn').addEventListener('click', toggleBookmark);
  document.getElementById('submitBtn').addEventListener('click', showSubmitConfirmation);
  document.getElementById('restartBtn').addEventListener('click', restartQuiz);
  document.getElementById('shuffleBtn').addEventListener('click', shuffleQuestions);
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
}

function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerText').textContent = `${mins}:${secs}`;
  }, 1000);
}

function renderQuestion(index) {
  if (index < 0 || index >= quizData.length) return;
  currentQuestionIndex = index;
  saveState();

  const q = quizData[index];
  
  // Question Header
  document.getElementById('qTitle').textContent = `Question ${q.id} / ${quizData.length}`;
  
  // Bookmark Button State
  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarkedQuestions.has(q.id)) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = '★ Đã đánh dấu';
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = '☆ Đánh dấu';
  }

  // Render Question Body (Ordered elements)
  const qTextEl = document.getElementById('qText');
  qTextEl.innerHTML = ''; // clear

  if (q.elements && q.elements.length > 0) {
    q.elements.forEach(elem => {
      if (elem.type === 'text') {
        const p = document.createElement('p');
        p.className = 'q-text-paragraph';
        p.style.marginBottom = '0.75rem';
        p.textContent = elem.value;
        qTextEl.appendChild(p);
      } else if (elem.type === 'image') {
        const imgWrap = document.createElement('div');
        imgWrap.className = 'q-images-container';
        imgWrap.style.margin = '1rem 0';
        
        const img = document.createElement('img');
        img.src = elem.value;
        img.className = 'q-img';
        img.alt = `Hình ảnh Question ${q.id}`;
        imgWrap.appendChild(img);
        
        qTextEl.appendChild(imgWrap);
      }
    });
  }

  // Multi-Select Prompt Badge if maxSelect > 1
  const isMulti = q.maxSelect && q.maxSelect > 1;
  const userAns = userAnswers[q.id];

  if (isMulti) {
    const selectedCount = Array.isArray(userAns) ? userAns.length : 0;
    const badge = document.createElement('div');
    badge.className = 'mode-badge';
    badge.style.marginBottom = '1rem';
    badge.style.display = 'inline-flex';
    badge.style.background = 'rgba(129, 140, 248, 0.15)';
    badge.style.color = 'var(--accent-purple)';
    badge.style.borderColor = 'rgba(129, 140, 248, 0.3)';
    badge.innerHTML = `📌 <b>Câu hỏi chọn ${q.maxSelect} đáp án</b> &nbsp;(Đã chọn: ${selectedCount}/${q.maxSelect})`;
    qTextEl.appendChild(badge);
  }

  // Render Options & Interactive Area
  const optionsListEl = document.getElementById('optionsList');
  optionsListEl.innerHTML = '';

  const isAnswered = isQuestionAnswered(q);
  const showFeedback = isSubmitted || (quizMode === 'practice' && isAnswered);

  // Custom Interactive Row Controls (Yes/No or Dropdowns)
  if (q.interactive) {
    renderInteractiveControls(q, optionsListEl);
  } else if (q.options && q.options.length > 0) {
    // Standard Options (Single or Multi Select)
    q.options.forEach(opt => {
      let isSelected = false;
      if (isMulti) {
        isSelected = Array.isArray(userAns) && userAns.includes(opt.letter);
      } else {
        isSelected = userAns === opt.letter;
      }

      const isCorrect = opt.isCorrect;
      
      const optEl = document.createElement('div');
      let optClass = 'option-item';
      if (isSelected) optClass += ' selected';
      
      if (showFeedback && isSelected) {
        optClass += isCorrect ? ' correct' : ' incorrect';
      } else if (showFeedback && isCorrect) {
        optClass += ' correct';
      }

      optEl.className = optClass;
      optEl.innerHTML = `
        <div class="option-badge">${isMulti ? (isSelected ? '✓' : opt.letter) : opt.letter}</div>
        <div class="option-text">
          ${opt.image ? `<img src="${opt.image}" class="option-img" style="max-width:100%; border-radius:4px; margin-top:5px;" />` : ''}
          ${opt.text ? escapeHtml(opt.text) : ''}
        </div>
      `;

      optEl.addEventListener('click', () => {
        selectOption(q, opt.letter);
      });

      optionsListEl.appendChild(optEl);
    });
  }

  // Render Explanation & Instant Feedback Box
  const expBox = document.getElementById('explanationBox');
  const expContent = document.getElementById('expContent');
  expContent.innerHTML = ''; // clear

  if (showFeedback) {
    const isCorrect = isQuestionCorrect(q);

    // 1. Instant Feedback Banner
    const banner = document.createElement('div');
    banner.className = `feedback-banner ${isCorrect ? 'correct-banner' : 'incorrect-banner'}`;

    if (isCorrect) {
      banner.innerHTML = `<span>🟢 Chính xác! Bạn đã chọn đủ và đúng tất cả các đáp án.</span>`;
    } else {
      let correctLetterStr = '';
      if (q.options) {
        const correctLetters = q.options.filter(o => o.isCorrect).map(o => o.letter);
        if (correctLetters.length > 0) {
          correctLetterStr = ` (Đáp án đúng là: ${correctLetters.join(', ')})`;
        }
      }
      banner.innerHTML = `<span>🔴 Chưa chính xác! Hãy đọc kỹ giải thích chi tiết bên dưới.${correctLetterStr}</span>`;
    }

    expContent.appendChild(banner);

    // 2. Rich Explanation Text
    let expText = q.explanation;
    if (!expText && q.notes && q.notes.length > 0) {
      expText = q.notes.join('\n');
    }
    if (!expText && q.interactive) {
      const correctSummary = q.interactive.rows.map(r => `• ${r.label} ➔ ${r.correct}`).join('\n');
      expText = `Đáp án chuẩn từng dòng:\n${correctSummary}`;
    }
    if (!expText && q.options) {
      const correctOpts = q.options.filter(o => o.isCorrect);
      if (correctOpts.length > 0) {
        expText = `• Đáp án đúng: ${correctOpts.map(o => `${o.letter}. ${o.text}`).join('\n')}`;
      }
    }

    if (expText) {
      const title = document.createElement('div');
      title.className = 'exp-title';
      title.innerHTML = '<span>💡 Phân tích & Giải thích chi tiết:</span>';
      expContent.appendChild(title);

      const textNode = document.createElement('div');
      textNode.style.whiteSpace = 'pre-line';
      textNode.style.lineHeight = '1.65';
      textNode.textContent = expText;
      expContent.appendChild(textNode);
    }

    // 3. Answer Key Images (Image 2)
    if (q.answer_images && q.answer_images.length > 0) {
      const ansImgTitle = document.createElement('div');
      ansImgTitle.className = 'exp-title';
      ansImgTitle.style.marginTop = '1rem';
      ansImgTitle.innerHTML = '<span>🖼️ Hình ảnh đáp án chuẩn từ đề thi gốc:</span>';
      expContent.appendChild(ansImgTitle);

      const ansImgContainer = document.createElement('div');
      ansImgContainer.className = 'q-images-container';
      ansImgContainer.style.marginTop = '0.5rem';

      q.answer_images.forEach(ansImgPath => {
        const img = document.createElement('img');
        img.src = ansImgPath;
        img.className = 'q-img';
        img.style.borderColor = 'var(--accent-emerald)';
        img.alt = `Hình ảnh đáp án Question ${q.id}`;
        ansImgContainer.appendChild(img);
      });

      expContent.appendChild(ansImgContainer);
    }

    expBox.classList.add('show');
  } else {
    expBox.classList.remove('show');
  }

  // Update Progress Bar
  const progressPercent = ((index + 1) / quizData.length) * 100;
  document.getElementById('progressBarFill').style.width = `${progressPercent}%`;
  document.getElementById('progressCountText').textContent = `Câu ${index + 1} trên ${quizData.length}`;

  // Button States
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').disabled = index === quizData.length - 1;

  renderMatrix();
}

function renderInteractiveControls(q, container) {
  const interContainer = document.createElement('div');
  interContainer.className = 'interactive-container';

  const userRowAns = userAnswers[q.id] || {};

  q.interactive.rows.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'interactive-row';

    const currentVal = userRowAns[row.id];
    const isShowFeedback = isSubmitted || (quizMode === 'practice' && isQuestionAnswered(q));

    if (isShowFeedback && currentVal !== undefined) {
      if (currentVal === row.correct) {
        rowEl.classList.add('row-correct');
      } else {
        rowEl.classList.add('row-incorrect');
      }
    }

    const labelEl = document.createElement('div');
    labelEl.className = 'row-label';
    labelEl.textContent = row.label;
    rowEl.appendChild(labelEl);

    if (q.interactive.type === 'yes_no') {
      const groupEl = document.createElement('div');
      groupEl.className = 'yes-no-group';

      ['Yes', 'No'].forEach(val => {
        const btn = document.createElement('button');
        let btnClass = 'btn-yn';
        if (currentVal === val) btnClass += ' selected';
        
        btn.className = btnClass;
        btn.textContent = val;

        btn.addEventListener('click', () => {
          selectInteractiveRowOption(q.id, row.id, val);
        });

        groupEl.appendChild(btn);
      });

      rowEl.appendChild(groupEl);

    } else if (q.interactive.type === 'dropdown_matching') {
      const selectEl = document.createElement('select');
      selectEl.className = 'custom-select';

      const defaultOpt = document.createElement('option');
      defaultOpt.value = '';
      defaultOpt.textContent = '-- Chọn đáp án --';
      selectEl.appendChild(defaultOpt);

      row.options.forEach(optText => {
        const opt = document.createElement('option');
        opt.value = optText;
        opt.textContent = optText;
        if (currentVal === optText) opt.selected = true;
        selectEl.appendChild(opt);
      });

      selectEl.addEventListener('change', (e) => {
        selectInteractiveRowOption(q.id, row.id, e.target.value);
      });

      rowEl.appendChild(selectEl);
    }

    interContainer.appendChild(rowEl);
  });

  container.appendChild(interContainer);
}

function selectOption(q, letter) {
  const isMulti = q.maxSelect && q.maxSelect > 1;
  const qId = q.id;

  if (isMulti) {
    let currentArr = userAnswers[qId];
    if (!Array.isArray(currentArr)) currentArr = [];
    
    if (currentArr.includes(letter)) {
      currentArr = currentArr.filter(l => l !== letter);
    } else {
      if (currentArr.length < q.maxSelect) {
        currentArr.push(letter);
      } else {
        // If maxSelect reached, replace last selected
        currentArr.pop();
        currentArr.push(letter);
      }
    }
    userAnswers[qId] = currentArr;
  } else {
    userAnswers[qId] = letter;
  }

  saveState();
  renderQuestion(currentQuestionIndex);
  renderMatrix();
}

function selectInteractiveRowOption(qId, rowId, value) {
  if (typeof userAnswers[qId] !== 'object' || userAnswers[qId] === null) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][rowId] = value;
  saveState();
  renderQuestion(currentQuestionIndex);
  renderMatrix();
}

function toggleBookmark() {
  const qId = quizData[currentQuestionIndex].id;
  if (bookmarkedQuestions.has(qId)) {
    bookmarkedQuestions.delete(qId);
  } else {
    bookmarkedQuestions.add(qId);
  }
  saveState();
  renderQuestion(currentQuestionIndex);
  renderMatrix();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    renderQuestion(currentQuestionIndex - 1);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    renderQuestion(currentQuestionIndex + 1);
  }
}

function isQuestionAnswered(q) {
  const userAns = userAnswers[q.id];
  if (userAns === undefined) return false;

  if (q.interactive) {
    const answeredRows = Object.keys(userAns).length;
    return answeredRows === q.interactive.rows.length;
  } else if (q.maxSelect && q.maxSelect > 1) {
    return Array.isArray(userAns) && userAns.length === q.maxSelect;
  }
  return true;
}

function isQuestionCorrect(q) {
  const userAns = userAnswers[q.id];
  if (userAns === undefined) return false;

  if (q.interactive) {
    if (typeof userAns !== 'object') return false;
    return q.interactive.rows.every(r => userAns[r.id] === r.correct);
  } else if (q.maxSelect && q.maxSelect > 1) {
    if (!Array.isArray(userAns)) return false;
    const correctLetters = q.options.filter(o => o.isCorrect).map(o => o.letter);
    if (userAns.length !== correctLetters.length) return false;
    return correctLetters.every(l => userAns.includes(l)) && userAns.every(l => correctLetters.includes(l));
  } else if (q.options && q.options.length > 0) {
    const correctOpt = q.options.find(o => o.isCorrect);
    return correctOpt && userAns === correctOpt.letter;
  }
  return false;
}

function renderMatrix() {
  const gridEl = document.getElementById('matrixGrid');
  gridEl.innerHTML = '';

  let answeredCount = 0;

  quizData.forEach((q, idx) => {
    const qId = q.id;
    const answered = isQuestionAnswered(q);
    const isBookmarked = bookmarkedQuestions.has(qId);
    
    if (answered) answeredCount++;

    const correct = isQuestionCorrect(q);

    // Filter Logic
    let show = true;
    if (activeFilter === 'answered' && !answered) show = false;
    if (activeFilter === 'unanswered' && answered) show = false;
    if (activeFilter === 'bookmarked' && !isBookmarked) show = false;
    if (activeFilter === 'wrong' && (!answered || correct)) show = false;

    if (!show) return;

    const btn = document.createElement('button');
    let btnClass = 'matrix-btn';
    
    if (idx === currentQuestionIndex) btnClass += ' active';
    if (answered) btnClass += ' answered';
    if (isBookmarked) btnClass += ' bookmarked';

    if (isSubmitted || (quizMode === 'practice' && answered)) {
      btnClass += correct ? ' correct' : ' incorrect';
    }

    btn.className = btnClass;
    btn.textContent = qId;
    btn.addEventListener('click', () => renderQuestion(idx));

    gridEl.appendChild(btn);
  });

  document.getElementById('answeredCountText').textContent = `${answeredCount}/${quizData.length}`;
}

function showSubmitConfirmation() {
  const answeredCount = quizData.filter(q => isQuestionAnswered(q)).length;
  if (confirm(`Bạn đã hoàn thành ${answeredCount}/${quizData.length} câu. Bạn có chắc chắn muốn nộp bài và xem điểm?`)) {
    submitQuiz();
  }
}

function submitQuiz() {
  isSubmitted = true;
  
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  quizData.forEach(q => {
    if (!isQuestionAnswered(q)) {
      skippedCount++;
    } else {
      if (isQuestionCorrect(q)) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const totalQuestions = quizData.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // Render Modal Results
  document.getElementById('modalScore').textContent = `${correctCount}/${totalQuestions}`;
  document.getElementById('modalPercent').textContent = `${scorePercent}% Pass (Chuẩn 70%)`;
  document.getElementById('modalCorrect').textContent = correctCount;
  document.getElementById('modalWrong').textContent = wrongCount;
  document.getElementById('modalSkipped').textContent = skippedCount;

  const scoreCircle = document.getElementById('scoreCircle');
  scoreCircle.style.background = `conic-gradient(var(--accent-emerald) ${scorePercent * 3.6}deg, var(--bg-hover) 0deg)`;

  document.getElementById('resultModal').classList.add('show');
  
  renderQuestion(currentQuestionIndex);
  renderMatrix();
}

function closeModal() {
  document.getElementById('resultModal').classList.remove('show');
}

function restartQuiz() {
  if (confirm('Bạn có chắc chắn muốn làm lại từ đầu? Tất cả câu trả lời sẽ bị xóa.')) {
    userAnswers = {};
    isSubmitted = false;
    secondsElapsed = 0;
    saveState();
    closeModal();
    renderQuestion(0);
    renderMatrix();
  }
}

function shuffleQuestions() {
  if (confirm('Bạn có chắc chắn muốn đảo ngẫu nhiên thứ tự tất cả các câu hỏi? Các câu đã trả lời sẽ vẫn được giữ nguyên.')) {
    // Thuật toán xáo trộn Fisher-Yates
    for (let i = quizData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
    currentQuestionIndex = 0;
    saveState();
    renderQuestion(currentQuestionIndex);
    renderMatrix();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
