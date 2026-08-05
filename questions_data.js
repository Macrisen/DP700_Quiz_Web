const quizData = [
  {
    "id": 1,
    "title": "Question 1",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions.\nClicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to ensure that the data analysts can access the gold layer lakehouse.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions."
      },
      {
        "type": "text",
        "value": "Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to ensure that the data analysts can access the gold layer lakehouse."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Add the DataAnalyst group to the Viewer role for WorkspaceA.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Share the lakehouse with the DataAnalysts group and grant the Build reports on the default semantic model permission.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Share the lakehouse with the DataAnalysts group and grant the Read all Apache Spark permission",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Fabric Lakehouse Medallion Architecture & Access Control.\n• Phân tích đáp án đúng (C):\n  - Nhóm DataAnalysts chỉ cần quyền đọc dữ liệu Gold layer mà KHÔNG được truy cập Bronze/Silver layer.\n  - Việc chia sẻ Lakehouse với quyền \"Read all SQL Endpoint data\" giúp Data Analysts có thể viết truy vấn SQL trên các Delta table tầng Gold qua SQL Analytics Endpoint mà không có quyền xem các file thô underlying ở các lớp Bronze/Silver.\n• Vì sao các lựa chọn khác sai:\n  - A: Thêm group vào role Viewer của WorkspaceA sẽ cho phép đọc toàn bộ item trong WorkspaceA (bao gồm Bronze & Silver).\n  - D: Quyền Spark cho phép truy cập file thô trong Lakehouse, vi phạm yêu cầu bảo mật.",
    "maxSelect": 1
  },
  {
    "id": 2,
    "title": "Question 2",
    "text": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives."
      },
      {
        "type": "text",
        "value": "You plan to implement row-level security (RLS)."
      },
      {
        "type": "text",
        "value": "You need to ensure that the sales representatives can see only their respective data."
      },
      {
        "type": "text",
        "value": "Which warehouse object do you require to implement RLS?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "STORED PROCEDURE",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "CONSTRAINT",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "SCHEMA",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "FUNCTION",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Row-Level Security (RLS) trong Fabric Data Warehouse.\n• Phân tích đáp án đúng (D - FUNCTION):\n  - Để triển khai RLS trong T-SQL / Fabric Warehouse, bạn cần tạo một **Inline Table-Valued Function (TVF)** làm hàm điều kiện (Predicate Function) để lọc dữ liệu theo người dùng (sử dụng USER_NAME() hoặc SUSER_SNAME()).\n  - Sau đó gắn TVF này vào SECURITY POLICY để áp dụng RLS.\n• Vì sao các lựa chọn khác sai:\n  - A (STORED PROCEDURE): Thủ tục lưu trữ không dùng làm bộ lọc RLS tự động cho truy vấn table.\n  - B (CONSTRAINT): Ràng buộc dữ liệu (PRIMARY KEY, CHECK...) không điều khiển phân quyền dòng RLS.\n  - C (SCHEMA): Schema chỉ dùng để phân nhóm không gian tên và phân quyền bảng, không áp dụng RLS dòng.",
    "maxSelect": 1
  },
  {
    "id": 3,
    "title": "Question 3",
    "text": "HOTSPOT -\nYou have a Fabric workspace named Workspace1_DEV that contains the following items:\n10 reports\nFour notebooks -\nThree lakehouses -\nTwo data pipelines -\nTwo Dataflow Gen1 dataflows -\nThree Dataflow Gen2 dataflows -\nFive semantic models that each has a scheduled refresh policy\nYou create a deployment pipeline named Pipeline1 to move items from Workspace1_DEV to a new workspace named Workspace1_TEST.\nYou deploy all the items from Workspace1_DEV to Workspace1_TEST.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1_DEV that contains the following items:"
      },
      {
        "type": "text",
        "value": "10 reports"
      },
      {
        "type": "text",
        "value": "Four notebooks -"
      },
      {
        "type": "text",
        "value": "Three lakehouses -"
      },
      {
        "type": "text",
        "value": "Two data pipelines -"
      },
      {
        "type": "text",
        "value": "Two Dataflow Gen1 dataflows -"
      },
      {
        "type": "text",
        "value": "Three Dataflow Gen2 dataflows -"
      },
      {
        "type": "text",
        "value": "Five semantic models that each has a scheduled refresh policy"
      },
      {
        "type": "text",
        "value": "You create a deployment pipeline named Pipeline1 to move items from Workspace1_DEV to a new workspace named Workspace1_TEST."
      },
      {
        "type": "text",
        "value": "You deploy all the items from Workspace1_DEV to Workspace1_TEST."
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image1.png"
      }
    ],
    "options": [],
    "images": [
      "images/image1.png"
    ],
    "answer_images": [
      "images/image2.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "Data from the semantic models will be deployed to the target stage.",
          "correct": "No"
        },
        {
          "id": "r2",
          "label": "The Dataflow Gen1 dataflows will be deployed to the target stage.",
          "correct": "Yes"
        },
        {
          "id": "r3",
          "label": "The scheduled refresh policies will be deployed to the target stage.",
          "correct": "No"
        }
      ]
    },
    "explanation": "• Khái niệm: Fabric Deployment Pipeline Artifact Support.\n• Phân tích chi tiết từng phát biểu:\n  1. Data from semantic models -> NO: Deployment pipeline chỉ di chuyển cấu trúc/metadata của Semantic Model chứ không chép dữ liệu thực tế.\n  2. Dataflow Gen1 dataflows -> YES: Dataflow Gen1 được hỗ trợ chuyển giao chính thức trong Deployment Pipeline.\n  3. Scheduled refresh policies -> NO: Lịch làm mới tự động (Scheduled Refresh) thuộc về cấu hình riêng của từng môi trường và không được tự động chép đè sang môi trường đích.",
    "maxSelect": 1
  },
  {
    "id": 4,
    "title": "Question 4",
    "text": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod.\nYou need to deploy an eventhouse as part of the deployment process.\nWhat should you use to add the eventhouse to the deployment process?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod."
      },
      {
        "type": "text",
        "value": "You need to deploy an eventhouse as part of the deployment process."
      },
      {
        "type": "text",
        "value": "What should you use to add the eventhouse to the deployment process?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "GitHub Actions",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a deployment pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "an Azure DevOps pipeline",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Eventhouse Deployment in Fabric.\n• Phân tích đáp án đúng (B - a deployment pipeline):\n  - Eventhouse là một loại item có sẵn trong Fabric. Bạn có thể thêm Eventhouse trực tiếp vào Fabric Deployment Pipeline để di chuyển từ Dev -> Test -> Prod một cách dễ dàng và đồng bộ.\n• Vì sao các lựa chọn khác sai:\n  - A & C (GitHub Actions / Azure DevOps Pipeline): Mặc dù có thể dùng API, nhưng sử dụng Fabric Deployment Pipeline tích hợp sẵn là phương án chuẩn native nhất trong Fabric.",
    "maxSelect": 1
  },
  {
    "id": 5,
    "title": "Question 5",
    "text": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1.\nYou plan to deploy Warehouse1 to a new workspace named Workspace2.\nAs part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "You plan to deploy Warehouse1 to a new workspace named Workspace2."
      },
      {
        "type": "text",
        "value": "As part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a database project",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a deployment pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a Python script",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a T-SQL script",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Schema & Reference Validation trong Fabric Deployment Pipeline.\n• Phân tích đáp án đúng (B - a deployment pipeline):\n  - Khi triển khai Warehouse từ workspace này sang workspace khác bằng Fabric Deployment Pipeline, hệ thống sẽ tự động kiểm tra phụ thuộc (Dependency Validation) và phát hiện các tham chiếu bị hỏng (Invalid References) mà KHÔNG cần viết bất kỳ dòng code nào.\n• Vì sao các lựa chọn khác sai:\n  - A (Database project): Tốn nhiều công sức thiết lập dự án, biên dịch dacpac (vi phạm tiêu chí minimize development effort).\n  - C & D (Python / T-SQL script): Phải viết kịch bản thủ công vô cùng phức tạp để bắt lỗi tham chiếu.",
    "maxSelect": 1
  },
  {
    "id": 6,
    "title": "Question 6",
    "text": "You have a Fabric workspace that contains a Real-Time Intelligence solution and an eventhouse.\nUsers report that from OneLake file explorer, they cannot see the data from the eventhouse.\nYou enable OneLake availability for the eventhouse.\nWhat will be copied to OneLake?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a Real-Time Intelligence solution and an eventhouse."
      },
      {
        "type": "text",
        "value": "Users report that from OneLake file explorer, they cannot see the data from the eventhouse."
      },
      {
        "type": "text",
        "value": "You enable OneLake availability for the eventhouse."
      },
      {
        "type": "text",
        "value": "What will be copied to OneLake?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "only data added to new databases that are added to the eventhouse",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "only the existing data in the eventhouse",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "no data",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "both new data and existing data in the eventhouse",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "only new data added to the eventhouse",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: OneLake Availability for Eventhouse / KQL Database.\n• Phân tích đáp án đúng (E - only new data added to the eventhouse):\n  - Khi bật tính năng OneLake Availability cho Eventhouse, Fabric chỉ thực hiện tự động định dạng và đồng bộ các **dữ liệu MỚI được nạp vào kể từ thời điểm bật trở đi** sang định dạng Delta Lake trên OneLake.\n  - Dữ liệu lịch sử đã có từ trước (Existing data) không được tự động chép ngược lại (no automatic backfill) để tránh làm suy giảm hiệu năng Kusto engine.",
    "maxSelect": 1
  },
  {
    "id": 7,
    "title": "Question 7",
    "text": "You have a Fabric workspace named Workspace1.\nYou plan to integrate Workspace1 with Azure DevOps.\nYou will use a Fabric deployment pipeline named deployPipeline1 to deploy items from Workspace1 to higher environment workspaces as part of a medallion architecture. You will run deployPipeline1 by using an API call from an Azure DevOps pipeline.\nYou need to configure API authentication between Azure DevOps and Fabric.\nWhich type of authentication should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1."
      },
      {
        "type": "text",
        "value": "You plan to integrate Workspace1 with Azure DevOps."
      },
      {
        "type": "text",
        "value": "You will use a Fabric deployment pipeline named deployPipeline1 to deploy items from Workspace1 to higher environment workspaces as part of a medallion architecture. You will run deployPipeline1 by using an API call from an Azure DevOps pipeline."
      },
      {
        "type": "text",
        "value": "You need to configure API authentication between Azure DevOps and Fabric."
      },
      {
        "type": "text",
        "value": "Which type of authentication should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "service principal",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Microsoft Entra username and password",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "managed private endpoint",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "workspace identity",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Service Principal Authentication cho Fabric REST APIs.\n• Phân tích đáp án đúng (A - service principal):\n  - Để tự động gọi Fabric REST API từ Azure DevOps Pipeline trong quy trình CI/CD, giải pháp chuẩn an toàn và không tương tác (non-interactive) là sử dụng **Microsoft Entra Service Principal** (App Registration).\n• Vì sao các lựa chọn khác sai:\n  - B: Username/password cá nhân dễ bị dính xác thực 2 yếu tố (MFA) và vi phạm chuẩn bảo mật.\n  - C: Managed private endpoint là giải pháp mạng (Network), không phải phương thức xác thực danh tính API.\n  - D: Workspace identity dùng cho các item bên trong Fabric truy cập dịch vụ Azure thô, không dùng cho Azure DevOps gọi API vào Fabric.",
    "maxSelect": 1
  },
  {
    "id": 8,
    "title": "Question 8",
    "text": "You have a Google Cloud Storage (GCS) container named storage1 that contains the files shown in the following table.\nYou have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the shortcuts shown in the following table.\nYou need to read data from all the shortcuts.\nWhich shortcuts will retrieve data from the cache?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Google Cloud Storage (GCS) container named storage1 that contains the files shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image3.png"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the shortcuts shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image4.png"
      },
      {
        "type": "text",
        "value": "You need to read data from all the shortcuts."
      },
      {
        "type": "text",
        "value": "Which shortcuts will retrieve data from the cache?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Stores only",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Products only",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Stores and Products only",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Products, Stores, and Trips",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Trips only",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "Products and Trips only",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image3.png",
      "images/image4.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Shortcut Caching in Fabric Lakehouse.\n• Phân tích đáp án đúng (C - Stores and Products only):\n  - Dữ liệu `StoreFile.json` (500 MB) và `ProductFile.parquet` (8 MB) được truy cập gần nhất trong vòng 4 - 12 giờ, kích thước và thời gian truy cập thỏa mãn điều kiện bộ nhớ đệm.\n  - Shortcut `Trips` đã được truy cập từ 48 giờ trước (quá thời hạn lưu giữ cache hiệu quả) nên không lấy từ cache.\n  - Do đó, hai Shortcut `Stores` và `Products` sẽ lấy dữ liệu từ cache.",
    "maxSelect": 1
  },
  {
    "id": 9,
    "title": "Question 9",
    "text": "You have a Fabric workspace named Workspace1 that contains an Apache Spark job definition named Job1.\nYou have an Azure SQL database named Source1 that has public internet access disabled.\nYou need to ensure that Job1 can access the data in Source1.\nWhat should you create?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains an Apache Spark job definition named Job1."
      },
      {
        "type": "text",
        "value": "You have an Azure SQL database named Source1 that has public internet access disabled."
      },
      {
        "type": "text",
        "value": "You need to ensure that Job1 can access the data in Source1."
      },
      {
        "type": "text",
        "value": "What should you create?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "an on-premises data gateway",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a managed private endpoint",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "an integration runtime",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a data management gateway",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Managed Private Endpoint cho Spark Jobs.\n• Phân tích đáp án đúng (B - a managed private endpoint):\n  - Khi nguồn dữ liệu (Azure SQL Database) đã vô hiệu hóa truy cập Internet công cộng (public access disabled), các công cụ tính toán của Fabric (như Spark Job / Notebook) cần kết nối qua **Managed Private Endpoint** trong Workspace để đảm bảo đường truyền riêng tư an toàn.",
    "maxSelect": 1
  },
  {
    "id": 10,
    "title": "Question 10",
    "text": "You have an Azure Data Lake Storage Gen2 account named storage1 and an Amazon S3 bucket named storage2.\nYou have the Delta Parquet files shown in the following table.\nYou have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the following shortcuts:\nA shortcut to ProductFile aliased as Products\nA shortcut to StoreFile aliased as Stores\nA shortcut to TripsFile aliased as Trips\nThe data from which shortcuts will be retrieved from the cache?",
    "elements": [
      {
        "type": "text",
        "value": "You have an Azure Data Lake Storage Gen2 account named storage1 and an Amazon S3 bucket named storage2."
      },
      {
        "type": "text",
        "value": "You have the Delta Parquet files shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image5.png"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the following shortcuts:"
      },
      {
        "type": "text",
        "value": "A shortcut to ProductFile aliased as Products"
      },
      {
        "type": "text",
        "value": "A shortcut to StoreFile aliased as Stores"
      },
      {
        "type": "text",
        "value": "A shortcut to TripsFile aliased as Trips"
      },
      {
        "type": "text",
        "value": "The data from which shortcuts will be retrieved from the cache?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Trips and Stores only",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Products and Store only",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Stores only",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Products only",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Products, Stores, and Trips",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image5.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Shortcut Caching & Source Cloud Type.\n• Phân tích đáp án đúng (C - Stores only):\n  - Shortcut Cache trong Fabric chỉ được hỗ trợ cho các nguồn dữ liệu ngoài vùng (như Amazon S3 hay GCS) khi dữ liệu thỏa mãn điều kiện cache. Ở đây chỉ có Shortcut trỏ tới StoreFile (Amazon S3) kích thước nhỏ thỏa mãn điều kiện phục vụ cache.",
    "maxSelect": 1
  },
  {
    "id": 11,
    "title": "Question 11",
    "text": "HOTSPOT -\nYou have a Fabric workspace named Workspace1 that contains the items shown in the following table.\nFor Model1, the Keep your Direct Lake data up to date option is disabled.\nYou need to configure the execution of the items to meet the following requirements:\nNotebook1 must execute every weekday at 8:00 AM.\nNotebook2 must execute when a file is saved to an Azure Blob Storage container.\nModel1 must refresh when Notebook1 has executed successfully.\nHow should you orchestrate each item? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains the items shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image6.png"
      },
      {
        "type": "text",
        "value": "For Model1, the Keep your Direct Lake data up to date option is disabled."
      },
      {
        "type": "text",
        "value": "You need to configure the execution of the items to meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Notebook1 must execute every weekday at 8:00 AM."
      },
      {
        "type": "text",
        "value": "Notebook2 must execute when a file is saved to an Azure Blob Storage container."
      },
      {
        "type": "text",
        "value": "Model1 must refresh when Notebook1 has executed successfully."
      },
      {
        "type": "text",
        "value": "How should you orchestrate each item? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image7.png"
      }
    ],
    "options": [],
    "images": [
      "images/image6.png",
      "images/image7.png"
    ],
    "answer_images": [
      "images/image8.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Notebook1 (every weekday at 8:00 AM)",
          "options": [
            "Add Notebook1 to an Apache Spark job definition",
            "Add Notebook1 to Pipeline1",
            "From Real-Time hub, configure the execution of Notebook1"
          ],
          "correct": "Add Notebook1 to Pipeline1"
        },
        {
          "id": "r2",
          "label": "Notebook2 (file saved to Blob storage)",
          "options": [
            "Add Notebook2 to an Apache Spark job definition",
            "Add Notebook2 to Pipeline1",
            "From Real-Time hub, configure the execution of Notebook2"
          ],
          "correct": "From Real-Time hub, configure the execution of Notebook2"
        },
        {
          "id": "r3",
          "label": "Pipeline1",
          "options": [
            "Add Pipeline1 to an Apache Spark job definition",
            "Configure the execution of Pipeline1 by using a schedule",
            "From Real-Time hub, configure the execution of Pipeline1"
          ],
          "correct": "Configure the execution of Pipeline1 by using a schedule"
        },
        {
          "id": "r4",
          "label": "Model1 (refresh when Notebook1 succeeds)",
          "options": [
            "Add Model1 to Pipeline1",
            "From Real-Time hub, configure Model1 to refresh",
            "Set Keep your Direct Lake data up to date to On"
          ],
          "correct": "Add Model1 to Pipeline1"
        }
      ]
    },
    "explanation": "• Khái niệm: Fabric Workflow Orchestration & Data Pipeline.\n• Phân tích các bước cấu hình:\n  - Notebook1 (chạy định kỳ 8:00 AM) & Model1 (refresh khi Notebook1 xong): Thêm Notebook1 và Model1 vào **Pipeline1** để điều khiển thứ tự thực thi On Success.\n  - Notebook2 (chạy khi có file mới ở Blob Storage): Sử dụng **Real-Time Hub** (Event trigger) để bắt sự kiện file landing và kích hoạt Notebook2.\n  - Pipeline1: Cấu hình lịch biểu (Schedule) trực tiếp trên Pipeline1.",
    "maxSelect": 1
  },
  {
    "id": 12,
    "title": "Question 12",
    "text": "You have a Fabric workspace.\nYou have semi-structured data.\nYou need to read the data by using T-SQL, KQL, and Apache Spark. The data will only be written by using Spark.\nWhat should you use to store the data?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace."
      },
      {
        "type": "text",
        "value": "You have semi-structured data."
      },
      {
        "type": "text",
        "value": "You need to read the data by using T-SQL, KQL, and Apache Spark. The data will only be written by using Spark."
      },
      {
        "type": "text",
        "value": "What should you use to store the data?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a lakehouse",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "an eventhouse",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a datamart",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a warehouse",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Real-Time Intelligence & Eventhouse for Semi-Structured Data.\n• Phân tích đáp án đúng (B - an eventhouse):\n  - Eventhouse (KQL Database) tối ưu cho dữ liệu bán cấu trúc (JSON/dynamic), cho phép ghi dữ liệu bằng Spark và truy vấn linh hoạt bằng cả **T-SQL, KQL và Apache Spark**.",
    "maxSelect": 1
  },
  {
    "id": 13,
    "title": "Question 13",
    "text": "Your company has a sales department that uses two Fabric workspaces named Workspace1 and Workspace2.\nThe company decides to implement a domain strategy to organize the workspaces.\nYou need to ensure that a user can perform the following tasks:\nCreate a new domain for the sales department.\nCreate two subdomains: one for the east region and one for the west region.\nAssign Workspace1 to the east region subdomain.\nAssign Workspace2 to the west region subdomain.\nThe solution must follow the principle of least privilege.\nWhich role should you assign to the user?",
    "elements": [
      {
        "type": "text",
        "value": "Your company has a sales department that uses two Fabric workspaces named Workspace1 and Workspace2."
      },
      {
        "type": "text",
        "value": "The company decides to implement a domain strategy to organize the workspaces."
      },
      {
        "type": "text",
        "value": "You need to ensure that a user can perform the following tasks:"
      },
      {
        "type": "text",
        "value": "Create a new domain for the sales department."
      },
      {
        "type": "text",
        "value": "Create two subdomains: one for the east region and one for the west region."
      },
      {
        "type": "text",
        "value": "Assign Workspace1 to the east region subdomain."
      },
      {
        "type": "text",
        "value": "Assign Workspace2 to the west region subdomain."
      },
      {
        "type": "text",
        "value": "The solution must follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Which role should you assign to the user?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "workspace Admin",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "domain admin",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "domain contributor",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Fabric admin",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Domain Administration Roles trong Fabric.\n• Phân tích đáp án đúng (D - Fabric admin):\n  - Để tạo một Domain mới cấp phòng ban và các Subdomain cấp vùng, sau đó gán các Workspace vào Subdomain, người dùng cần có vai trò **Fabric Admin** (hoặc Capacity Admin) trong Tenant.",
    "maxSelect": 1
  },
  {
    "id": 14,
    "title": "Question 14",
    "text": "You have a Fabric workspace named Workspace1 that contains a warehouse named DW1 and a data pipeline named Pipeline1.\nYou plan to add a user named User3 to Workspace1.\nYou need to ensure that User3 can perform the following actions:\nView all the items in Workspace1.\nUpdate the tables in DW1.\nThe solution must follow the principle of least privilege.\nYou already assigned the appropriate object-level permissions to DW1.\nWhich workspace role should you assign to User3?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a warehouse named DW1 and a data pipeline named Pipeline1."
      },
      {
        "type": "text",
        "value": "You plan to add a user named User3 to Workspace1."
      },
      {
        "type": "text",
        "value": "You need to ensure that User3 can perform the following actions:"
      },
      {
        "type": "text",
        "value": "View all the items in Workspace1."
      },
      {
        "type": "text",
        "value": "Update the tables in DW1."
      },
      {
        "type": "text",
        "value": "The solution must follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "You already assigned the appropriate object-level permissions to DW1."
      },
      {
        "type": "text",
        "value": "Which workspace role should you assign to User3?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Admin",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Member",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Viewer",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Contributor",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Fabric Workspace Roles & Object-Level Permissions (Least Privilege).\n• Phân tích đáp án đúng (C - Viewer):\n  - Đề bài nêu rõ: User3 đã được gán sẵn các quyền mức đối tượng (object-level permissions) trực tiếp trên kho dữ liệu DW1 để cập nhật dữ liệu.\n  - Yêu cầu ở cấp Workspace chỉ là cho phép User3 nhìn thấy (View) tất cả các item trong Workspace1.\n  - Theo nguyên tắc trao quyền tối thiểu (Principle of Least Privilege), gán vai trò **Viewer** ở cấp Workspace là đủ để xem danh sách item, trong khi các quyền sửa đổi bảng đã được điều khiển bởi object-level permissions trên DW1.",
    "maxSelect": 1
  },
  {
    "id": 15,
    "title": "Question 15",
    "text": "You have a Fabric capacity that contains a workspace named Workspace1. Workspace1 contains a lakehouse named Lakehouse1, a data pipeline, a notebook, and several Microsoft Power BI reports.\nA user named User1 wants to use SQL to analyze the data in Lakehouse1.\nYou need to configure access for User1. The solution must meet the following requirements:\nProvide User1 with read access to the table data in Lakehouse1.\nPrevent User1 from using Apache Spark to query the underlying files in Lakehouse1.\nPrevent User1 from accessing other items in Workspace1.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric capacity that contains a workspace named Workspace1. Workspace1 contains a lakehouse named Lakehouse1, a data pipeline, a notebook, and several Microsoft Power BI reports."
      },
      {
        "type": "text",
        "value": "A user named User1 wants to use SQL to analyze the data in Lakehouse1."
      },
      {
        "type": "text",
        "value": "You need to configure access for User1. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Provide User1 with read access to the table data in Lakehouse1."
      },
      {
        "type": "text",
        "value": "Prevent User1 from using Apache Spark to query the underlying files in Lakehouse1."
      },
      {
        "type": "text",
        "value": "Prevent User1 from accessing other items in Workspace1."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Item Sharing & SQL Analytics Endpoint Access.\n• Phân tích đáp án đúng (A):\n  - Chia sẻ trực tiếp Lakehouse1 cho User1 và chọn quyền **Read all SQL endpoint data** cung cấp quyền đọc bảng qua SQL mà KHÔNG cho phép User1 dùng Spark đọc file thô và KHÔNG cho phép xem các item khác trong Workspace.",
    "maxSelect": 1
  },
  {
    "id": 16,
    "title": "Question 16",
    "text": "DRAG DROP -\nYou are implementing the following data entities in a Fabric environment:\nEntity1: Available in a lakehouse and contains data that will be used as a core organization entity\nEntity2: Available in a semantic model and contains data that meets organizational standards\nEntity3: Available in a Microsoft Power BI report and contains data that is ready for sharing and reuse\nEntity4: Available in a Power BI dashboard and contains approved data for executive-level decision making\nYour company requires that specific governance processes be implemented for the data.\nYou need to apply endorsement badges to the entities based on each entity’s use case.\nWhich badge should you apply to each entity? To answer, drag the appropriate badges the correct entities. Each badge may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nEntity1: core organization entity --> Master Data\nEntity2: meets organizational standards --> Certified\nEntity3: ready for sharing and reuse --> Promoted\nEntity4: Power BI dashboard, executive-level decision making --> Cannot be endorsed, The reason is Types of items that can be endorsed",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP -"
      },
      {
        "type": "text",
        "value": "You are implementing the following data entities in a Fabric environment:"
      },
      {
        "type": "text",
        "value": "Entity1: Available in a lakehouse and contains data that will be used as a core organization entity"
      },
      {
        "type": "text",
        "value": "Entity2: Available in a semantic model and contains data that meets organizational standards"
      },
      {
        "type": "text",
        "value": "Entity3: Available in a Microsoft Power BI report and contains data that is ready for sharing and reuse"
      },
      {
        "type": "text",
        "value": "Entity4: Available in a Power BI dashboard and contains approved data for executive-level decision making"
      },
      {
        "type": "text",
        "value": "Your company requires that specific governance processes be implemented for the data."
      },
      {
        "type": "text",
        "value": "You need to apply endorsement badges to the entities based on each entity’s use case."
      },
      {
        "type": "text",
        "value": "Which badge should you apply to each entity? To answer, drag the appropriate badges the correct entities. Each badge may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image9.png"
      },
      {
        "type": "text",
        "value": "Entity1: core organization entity --> Master Data"
      },
      {
        "type": "text",
        "value": "Entity2: meets organizational standards --> Certified"
      },
      {
        "type": "text",
        "value": "Entity3: ready for sharing and reuse --> Promoted"
      },
      {
        "type": "text",
        "value": "Entity4: Power BI dashboard, executive-level decision making --> Cannot be endorsed, The reason is Types of items that can be endorsed"
      }
    ],
    "options": [],
    "images": [
      "images/image9.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Entity1 (lakehouse, core organization entity)",
          "options": [
            "Certified",
            "Master data",
            "Promoted",
            "Cannot be endorsed"
          ],
          "correct": "Master data"
        },
        {
          "id": "r2",
          "label": "Entity2 (semantic model, meets organizational standards)",
          "options": [
            "Certified",
            "Master data",
            "Promoted",
            "Cannot be endorsed"
          ],
          "correct": "Certified"
        },
        {
          "id": "r3",
          "label": "Entity3 (Power BI report, ready for sharing and reuse)",
          "options": [
            "Certified",
            "Master data",
            "Promoted",
            "Cannot be endorsed"
          ],
          "correct": "Promoted"
        },
        {
          "id": "r4",
          "label": "Entity4 (Power BI dashboard, executive decision making)",
          "options": [
            "Certified",
            "Master data",
            "Promoted",
            "Cannot be endorsed"
          ],
          "correct": "Cannot be endorsed"
        }
      ]
    },
    "explanation": "• Khái niệm: Data Endorsement Badges trong Fabric Governance.\n• Phân tích ghép cặp:\n  - Entity1 (Thực thể cốt lõi tổ chức) ➔ **Master Data** (Dữ liệu chủ).\n  - Entity2 (Đạt chuẩn tổ chức) ➔ **Certified** (Đã chứng thực).\n  - Entity3 (Sẵn sàng chia sẻ tái sử dụng) ➔ **Promoted** (Đã quảng bá).\n  - Entity4 (Power BI Dashboard) ➔ **Cannot be endorsed** (Dashboard không hỗ trợ huy hiệu Endorsement trong Fabric, chỉ hỗ trợ cho Semantic Model, Report, Lakehouse...).",
    "maxSelect": 1
  },
  {
    "id": 17,
    "title": "Question 17",
    "text": "HOTSPOT -\nYou have three users named User1, User2, and User3.\nYou have the Fabric workspaces shown in the following table.\nYou have a security group named Group1 that contains User1 and User3.\nThe Fabric admin creates the domains shown in the following table.\nUser1 creates a new workspace named Workspace3.\nYou add Group1 to the default domain of Domain1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nNYN\nBeing a domain contributor doesn't give you any permissions on the workspace itself, only on the domain. Workspace roles are set differently. This excludes the first and last option.\nUser 3 will be domain contributor on the new workspace. Even though without domain admin permissions, there's nothing user 3 can do with Workspace 3.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have three users named User1, User2, and User3."
      },
      {
        "type": "text",
        "value": "You have the Fabric workspaces shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image10.png"
      },
      {
        "type": "text",
        "value": "You have a security group named Group1 that contains User1 and User3."
      },
      {
        "type": "text",
        "value": "The Fabric admin creates the domains shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image11.png"
      },
      {
        "type": "text",
        "value": "User1 creates a new workspace named Workspace3."
      },
      {
        "type": "text",
        "value": "You add Group1 to the default domain of Domain1."
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "NYN"
      },
      {
        "type": "text",
        "value": "Being a domain contributor doesn't give you any permissions on the workspace itself, only on the domain. Workspace roles are set differently. This excludes the first and last option."
      },
      {
        "type": "text",
        "value": "User 3 will be domain contributor on the new workspace. Even though without domain admin permissions, there's nothing user 3 can do with Workspace 3."
      }
    ],
    "options": [],
    "images": [
      "images/image10.png",
      "images/image11.png"
    ],
    "answer_images": [
      "images/image12.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "User3 has Viewer role access to Workspace3.",
          "correct": "No"
        },
        {
          "id": "r2",
          "label": "User3 has Domain contributor access to Domain1.",
          "correct": "Yes"
        },
        {
          "id": "r3",
          "label": "User2 has Contributor role access to Workspace3.",
          "correct": "No"
        }
      ]
    },
    "explanation": "• Khái niệm: Fabric Domain Permissions vs Workspace Permissions.\n• Phân tích từng phát biểu:\n  1. User3 has Viewer role access to Workspace3 -> NO (Domain Contributor không tự động cấp quyền truy cập Workspace).\n  2. User3 has Domain contributor access to Domain1 -> YES (Group1 chứa User3 được gán vào default domain Domain1).\n  3. User2 has Contributor role access to Workspace3 -> NO (User2 thuộc Domain2, không có quyền trên Workspace3).",
    "maxSelect": 1
  },
  {
    "id": 18,
    "title": "Question 18",
    "text": "You have two Fabric workspaces named Workspace1 and Workspace2.\nYou have a Fabric deployment pipeline named deployPipeline1 that deploys items from Workspace1 to Workspace2. DeployPipeline1 contains all the items in Workspace1.\nYou recently modified the items in Workspaces1.\nThe workspaces currently contain the items shown in the following table.\nItems in Workspace1 that have the same name as items in Workspace2 are currently paired.\nYou need to ensure that the items in Workspace1 overwrite the corresponding items in Workspace2. The solution must minimize effort.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have two Fabric workspaces named Workspace1 and Workspace2."
      },
      {
        "type": "text",
        "value": "You have a Fabric deployment pipeline named deployPipeline1 that deploys items from Workspace1 to Workspace2. DeployPipeline1 contains all the items in Workspace1."
      },
      {
        "type": "text",
        "value": "You recently modified the items in Workspaces1."
      },
      {
        "type": "text",
        "value": "The workspaces currently contain the items shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image13.png"
      },
      {
        "type": "text",
        "value": "Items in Workspace1 that have the same name as items in Workspace2 are currently paired."
      },
      {
        "type": "text",
        "value": "You need to ensure that the items in Workspace1 overwrite the corresponding items in Workspace2. The solution must minimize effort."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Delete all the items in Workspace2, and then run deployPipeline1.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Rename each item in Workspace2 to have the same name as the items in Workspace1.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Back up the items in Workspace2, and then run deployPipeline1.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Run deployPipeline1 without modifying the items in Workspace2.",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image13.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Deployment Pipeline Pairing & Overwrite.\n• Phân tích đáp án đúng (D):\n  - Các mục có cùng tên đã được ghép cặp (paired). Khi chạy `deployPipeline1`, các mục từ Workspace1 sẽ tự động ghi đè (overwrite) lên các mục tương ứng ở Workspace2 mà không cần sửa đổi thủ công.",
    "maxSelect": 1
  },
  {
    "id": 19,
    "title": "Question 19",
    "text": "You have a Fabric workspace named Workspace1 that contains a data pipeline named Pipeline1 and a lakehouse named Lakehouse1.\nYou have a deployment pipeline named deployPipeline1 that deploys Workspace1 to Workspace2.\nYou restructure Workspace1 by adding a folder named Folder1 and moving Pipeline1 to Folder1.\nYou use deployPipeline1 to deploy Workspace1 to Workspace2.\nWhat occurs to Workspace2?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a data pipeline named Pipeline1 and a lakehouse named Lakehouse1."
      },
      {
        "type": "text",
        "value": "You have a deployment pipeline named deployPipeline1 that deploys Workspace1 to Workspace2."
      },
      {
        "type": "text",
        "value": "You restructure Workspace1 by adding a folder named Folder1 and moving Pipeline1 to Folder1."
      },
      {
        "type": "text",
        "value": "You use deployPipeline1 to deploy Workspace1 to Workspace2."
      },
      {
        "type": "text",
        "value": "What occurs to Workspace2?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Only Pipeline1 and Lakehouse1 are deployed.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Only Folder1 is created and Pipeline1 moves to Folder1.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Deployment Pipeline Folder Structure Support.\n• Phân tích đáp án đúng (A):\n  - Deployment Pipeline trong Fabric hỗ trợ cấu trúc thư mục (Folders). Khi triển khai Workspace1 có chứa Folder1 sang Workspace2, Folder1 sẽ được tạo tự động và di chuyển các item tương ứng vào Folder1.",
    "maxSelect": 1
  },
  {
    "id": 20,
    "title": "Question 20",
    "text": "DRAG DROP -\nYour company has a team of developers. The team creates Python libraries of reusable code that is used to transform data.\nYou create a Fabric workspace name Workspace1 that will be used to develop extract, transform, and load (ETL) solutions by using notebooks.\nYou need to ensure that the libraries are available by default to new notebooks in Workspace1.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP -"
      },
      {
        "type": "text",
        "value": "Your company has a team of developers. The team creates Python libraries of reusable code that is used to transform data."
      },
      {
        "type": "text",
        "value": "You create a Fabric workspace name Workspace1 that will be used to develop extract, transform, and load (ETL) solutions by using notebooks."
      },
      {
        "type": "text",
        "value": "You need to ensure that the libraries are available by default to new notebooks in Workspace1."
      },
      {
        "type": "text",
        "value": "Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
      },
      {
        "type": "image",
        "value": "images/image14.png"
      }
    ],
    "options": [],
    "images": [
      "images/image14.png"
    ],
    "answer_images": [
      "images/image15.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Bước 1 (Hành động đầu tiên trong chuỗi)",
          "options": [
            "Create an environment",
            "Install the libraries",
            "Set the default environment",
            "Create a pool",
            "Change the runtime version"
          ],
          "correct": "Create an environment"
        },
        {
          "id": "r2",
          "label": "Bước 2 (Hành động thứ hai trong chuỗi)",
          "options": [
            "Create an environment",
            "Install the libraries",
            "Set the default environment",
            "Create a pool",
            "Change the runtime version"
          ],
          "correct": "Install the libraries"
        },
        {
          "id": "r3",
          "label": "Bước 3 (Hành động thứ ba trong chuỗi)",
          "options": [
            "Create an environment",
            "Install the libraries",
            "Set the default environment",
            "Create a pool",
            "Change the runtime version"
          ],
          "correct": "Set the default environment"
        }
      ]
    },
    "explanation": "• Khái niệm: Custom Environments for Workspace Notebooks.\n• Phân tích thứ tự 3 bước đúng:\n  1. **Create an environment**: Tạo một Environment mới trong Workspace.\n  2. **Install the libraries**: Cài đặt các thư viện Python tùy chỉnh vào Environment đó.\n  3. **Set the default environment**: Đặt Environment vừa tạo làm môi trường mặc định cho Workspace để mọi Notebook mới đều tự động kế thừa.",
    "maxSelect": 3
  },
  {
    "id": 21,
    "title": "Question 21",
    "text": "You have a Fabric workspace that contains a lakehouse and a notebook named Notebook1. Notebook1 reads data into a DataFrame from a table named Table1 and applies transformation logic. The data from the DataFrame is then written to a new Delta table named Table2 by using a merge operation.\nYou need to consolidate the underlying Parquet files in Table1.\nWhich command should you run?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse and a notebook named Notebook1. Notebook1 reads data into a DataFrame from a table named Table1 and applies transformation logic. The data from the DataFrame is then written to a new Delta table named Table2 by using a merge operation."
      },
      {
        "type": "text",
        "value": "You need to consolidate the underlying Parquet files in Table1."
      },
      {
        "type": "text",
        "value": "Which command should you run?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "VACUUM",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "BROADCAST",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "OPTIMIZE",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "CACHE",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Delta Table Optimization (Compaction).\n• Phân tích đáp án đúng (C - OPTIMIZE):\n  - Lệnh `OPTIMIZE` trong Delta Lake / Spark được sử dụng để gom nhóm (gộp) nhiều file Parquet nhỏ thành các file Parquet lớn có kích thước tối ưu (thường là ~1GB) để tăng tốc độ truy vấn.\n• Phân tích lựa chọn sai:\n  - A (VACUUM): Xóa các file cũ không còn sử dụng.\n  - B (BROADCAST): Kỹ thuật join dữ liệu trong Spark.\n  - D (CACHE): Đưa dữ liệu vào RAM.",
    "maxSelect": 1
  },
  {
    "id": 22,
    "title": "Question 22",
    "text": "You have five Fabric workspaces.\nYou are monitoring the execution of items by using Monitoring hub.\nYou need to identify in which workspace a specific item runs.\nWhich column should you view in Monitoring hub?",
    "elements": [
      {
        "type": "text",
        "value": "You have five Fabric workspaces."
      },
      {
        "type": "text",
        "value": "You are monitoring the execution of items by using Monitoring hub."
      },
      {
        "type": "text",
        "value": "You need to identify in which workspace a specific item runs."
      },
      {
        "type": "text",
        "value": "Which column should you view in Monitoring hub?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Start time",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Capacity",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Activity name",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Submitter",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Item type",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "Job type",
        "isCorrect": false
      },
      {
        "letter": "G",
        "text": "Location",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Fabric Monitoring Hub.\n• Phân tích đáp án đúng (G - Location):\n  - Cột **Location** trong Monitoring Hub hiển thị rõ tên Workspace nơi mà hoạt động/job cụ thể đang thực thi.",
    "maxSelect": 1
  },
  {
    "id": 23,
    "title": "Question 23",
    "text": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "You have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway."
      },
      {
        "type": "text",
        "value": "You need to copy data from Database1 to Warehouse1."
      },
      {
        "type": "text",
        "value": "Which item should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a Dataflow Gen1 dataflow",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a data pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a KQL queryset",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a notebook",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Data Copy via Gateway to Warehouse.\n• Phân tích đáp án đúng (B - a data pipeline):\n  - **Data Pipeline** là công cụ tối ưu nhất để di chuyển dữ liệu hàng loạt từ cơ sở dữ liệu SQL Server On-Premises (qua On-premises Data Gateway) vào Fabric Warehouse.",
    "maxSelect": 1
  },
  {
    "id": 25,
    "title": "Question 25",
    "text": "DRAG DROP -\nYou have a Fabric workspace that contains a warehouse named Warehouse1.\nIn Warehouse1, you create a table named DimCustomer by running the following statement.\nYou need to set the Customerkey column as a primary key of the DimCustomer table.\nWhich three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order.\nAlter table dbo.dimcustomer\nAdd constraint PK_dimcustomer primary key nonclustered (customerkey)\nnot enforced\nPRIMARY KEY is only supported when NONCLUSTERED and NOT ENFORCED are both used.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "In Warehouse1, you create a table named DimCustomer by running the following statement."
      },
      {
        "type": "image",
        "value": "images/image16.png"
      },
      {
        "type": "text",
        "value": "You need to set the Customerkey column as a primary key of the DimCustomer table."
      },
      {
        "type": "text",
        "value": "Which three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order."
      },
      {
        "type": "text",
        "value": "Alter table dbo.dimcustomer"
      },
      {
        "type": "text",
        "value": "Add constraint PK_dimcustomer primary key nonclustered (customerkey)"
      },
      {
        "type": "text",
        "value": "not enforced"
      },
      {
        "type": "text",
        "value": "PRIMARY KEY is only supported when NONCLUSTERED and NOT ENFORCED are both used."
      }
    ],
    "options": [],
    "images": [
      "images/image16.png"
    ],
    "answer_images": [
      "images/image17.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Code Segment 1",
          "options": [
            "ALTER TABLE dbo.DimCustomer",
            "DROP CONSTRAINT PK_DimCustomer",
            "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)"
          ],
          "correct": "ALTER TABLE dbo.DimCustomer"
        },
        {
          "id": "r2",
          "label": "Code Segment 2",
          "options": [
            "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
            "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
            "DROP CONSTRAINT PK_DimCustomer"
          ],
          "correct": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)"
        },
        {
          "id": "r3",
          "label": "Code Segment 3",
          "options": [
            "NOT ENFORCED",
            "ENFORCED"
          ],
          "correct": "NOT ENFORCED"
        }
      ]
    },
    "explanation": "• Khái niệm: Primary Key Constraints in Fabric Warehouse.\n• Phân tích thứ tự cú pháp T-SQL:\n  - Cú pháp chuẩn tạo PK trong Fabric Warehouse (chỉ hỗ trợ NONCLUSTERED và NOT ENFORCED):\n    `ALTER TABLE dbo.DimCustomer`\n    `ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)`\n    `NOT ENFORCED`",
    "maxSelect": 3
  },
  {
    "id": 26,
    "title": "Question 26",
    "text": "You have a Fabric workspace that contains a semantic model named Model1.\nYou need to dynamically execute and monitor the refresh progress of Model1.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a semantic model named Model1."
      },
      {
        "type": "text",
        "value": "You need to dynamically execute and monitor the refresh progress of Model1."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "dynamic management views in Microsoft SQL Server Management Studio (SSMS)",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Monitoring hub",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "dynamic management views in Azure Data Studio",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a semantic link in a notebook",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Semantic Link in Notebooks.\n• Phân tích đáp án đúng (D - a semantic link in a notebook):\n  - **Semantic Link** (thư viện `sempy` trong Fabric Notebook) cho phép bạn thực thi và theo dõi tiến trình làm mới (refresh) của Semantic Model một cách linh hoạt bằng mã Python.",
    "maxSelect": 1
  },
  {
    "id": 27,
    "title": "Question 27",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:"
      },
      {
        "type": "text",
        "value": "BikepointID -"
      },
      {
        "type": "text",
        "value": "Street -"
      },
      {
        "type": "text",
        "value": "Neighbourhood -"
      },
      {
        "type": "text",
        "value": "No_Bikes -"
      },
      {
        "type": "text",
        "value": "No_Empty_Docks -"
      },
      {
        "type": "text",
        "value": "Timestamp -"
      },
      {
        "type": "text",
        "value": "You need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "image",
        "value": "images/image18.png"
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image18.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: KQL Query Logic Validation.\n• Phân tích câu hỏi: Đoạn mã KQL sử dụng hai lệnh `project` liên tiếp giống hệt nhau, gây dư thừa và không tối ưu. Do đó đáp án là B (No).",
    "maxSelect": 1
  },
  {
    "id": 28,
    "title": "Question 28",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:"
      },
      {
        "type": "text",
        "value": "BikepointID -"
      },
      {
        "type": "text",
        "value": "Street -"
      },
      {
        "type": "text",
        "value": "Neighbourhood -"
      },
      {
        "type": "text",
        "value": "No_Bikes -"
      },
      {
        "type": "text",
        "value": "No_Empty_Docks -"
      },
      {
        "type": "text",
        "value": "Timestamp -"
      },
      {
        "type": "text",
        "value": "You need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "image",
        "value": "images/image19.png"
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image19.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: KQL Sort Operator Syntax.\n• Phân tích câu hỏi: Cú pháp sắp xếp trong KQL sử dụng `sort by` hoặc `order by`. Tuy nhiên đoạn mã có lỗi cú pháp nên đáp án là B (No).",
    "maxSelect": 1
  },
  {
    "id": 29,
    "title": "Question 29",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:"
      },
      {
        "type": "text",
        "value": "BikepointID -"
      },
      {
        "type": "text",
        "value": "Street -"
      },
      {
        "type": "text",
        "value": "Neighbourhood -"
      },
      {
        "type": "text",
        "value": "No_Bikes -"
      },
      {
        "type": "text",
        "value": "No_Empty_Docks -"
      },
      {
        "type": "text",
        "value": "Timestamp -"
      },
      {
        "type": "text",
        "value": "You need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "image",
        "value": "images/image20.png"
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image20.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: KQL Filter & Sort Syntax.\n• Phân tích đáp án đúng (A - Yes):\n  - Cú pháp `bike_location | filter Neighbourhood == \"Sands End\" and No_Bikes >= 15 | sort by No_Bikes asc | project ...` là chính xác và đáp ứng hoàn toàn yêu cầu lọc và sắp xếp tăng dần.",
    "maxSelect": 1
  },
  {
    "id": 30,
    "title": "Question 30",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:"
      },
      {
        "type": "text",
        "value": "BikepointID -"
      },
      {
        "type": "text",
        "value": "Street -"
      },
      {
        "type": "text",
        "value": "Neighbourhood -"
      },
      {
        "type": "text",
        "value": "No_Bikes -"
      },
      {
        "type": "text",
        "value": "No_Empty_Docks -"
      },
      {
        "type": "text",
        "value": "Timestamp -"
      },
      {
        "type": "text",
        "value": "You need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "image",
        "value": "images/image21.png"
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image21.png"
    ],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: T-SQL Query on KQL Database.\n• Phân tích đáp án đúng (A - Yes):\n  - KQL Database trong Fabric hỗ trợ truy vấn bằng T-SQL. Câu lệnh `SELECT ... WHERE ... ORDER BY` hoàn toàn hợp lệ và trả về kết quả chính xác.",
    "maxSelect": 1
  },
  {
    "id": 31,
    "title": "Question 31",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to ensure that processes for the bronze and silver layers run in isolation.\nHow should you configure the Apache Spark settings?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to ensure that processes for the bronze and silver layers run in isolation."
      },
      {
        "type": "text",
        "value": "How should you configure the Apache Spark settings?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Disable high concurrency.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create a custom pool.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Modify the number of executors.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Set the default environment.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Spark Isolated Pools for Medallion Architecture.\n• Phân tích đáp án đúng (B - Create a custom pool):\n  - Để đảm bảo các tiến trình xử lý tầng Bronze và Silver chạy cách ly hoàn toàn về mặt tài nguyên tính toán (isolation), giải pháp là **tạo Custom Spark Pool** riêng biệt.",
    "maxSelect": 1
  },
  {
    "id": 32,
    "title": "Question 32",
    "text": "DRAG DROP\n-\nCase Study\n-\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview\n-\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes\n-\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control\n-\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to ensure that the authors can see only their respective sales data.\nHow should you complete the statement? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Case Study"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to ensure that the authors can see only their respective sales data."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image22.png"
      }
    ],
    "options": [],
    "images": [
      "images/image22.png"
    ],
    "answer_images": [
      "images/image23.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Slot 1: CREATE FUNCTION ... RETURNS TABLE WITH [ ... ] AS",
          "options": [
            "AuthorSales",
            "AuthorEmail",
            "AuthorSales.AuthorEmail",
            "BLOCK",
            "FILTER",
            "INLINE",
            "SCHEMABINDING",
            "USER_NAME()"
          ],
          "correct": "SCHEMABINDING"
        },
        {
          "id": "r2",
          "label": "Slot 2: RETURN SELECT 1 AS tvf_rlspredicate_result WHERE @Author = [ ... ]",
          "options": [
            "AuthorSales",
            "AuthorEmail",
            "AuthorSales.AuthorEmail",
            "BLOCK",
            "FILTER",
            "INLINE",
            "SCHEMABINDING",
            "USER_NAME()"
          ],
          "correct": "USER_NAME()"
        },
        {
          "id": "r3",
          "label": "Slot 3: ADD FILTER PREDICATE Security.tvf_rlspredicate(AuthorEmail) ON [ ... ] WITH (STATE = ON)",
          "options": [
            "AuthorSales",
            "AuthorEmail",
            "AuthorSales.AuthorEmail",
            "BLOCK",
            "FILTER",
            "INLINE",
            "SCHEMABINDING",
            "USER_NAME()"
          ],
          "correct": "AuthorSales"
        }
      ]
    },
    "explanation": "• Khái niệm: Row-Level Security (RLS) T-SQL Implementation in Fabric.\n• Phân tích cú pháp 3 ô trống (Drag & Drop):\n  1. **Slot 1 (WITH SCHEMABINDING)**: Trong T-SQL, hàm điều kiện RLS (Inline Table-Valued Function) bắt buộc phải được định nghĩa với thuộc tính `WITH SCHEMABINDING` để ngăn chặn các thay đổi bảng đằng sau ảnh hưởng tới logic bảo mật.\n  2. **Slot 2 (WHERE @Author = USER_NAME())**: Hàm `USER_NAME()` trả về tên tài khoản/email của người dùng Microsoft Entra đang thực thi truy vấn. So sánh `@Author = USER_NAME()` đảm bảo tác giả chỉ xem được đúng dòng dữ liệu tương ứng với email của mình.\n  3. **Slot 3 (ON AuthorSales)**: Áp dụng chính sách bảo mật `SECURITY POLICY` lọc trên bảng `AuthorSales` với tham số đầu vào là cột `AuthorEmail`.",
    "maxSelect": 1
  },
  {
    "id": 33,
    "title": "Question 33",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.getSecret and specify the key vault URL and key vault secret.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have an Azure key vault named KeyVault1 that contains secrets."
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:"
      },
      {
        "type": "text",
        "value": "• Loads stage data to the target tables in a lakehouse"
      },
      {
        "type": "text",
        "value": "• Triggers the refresh of a semantic model"
      },
      {
        "type": "text",
        "value": "You plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes."
      },
      {
        "type": "text",
        "value": "You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "text",
        "value": "Use notebookutils.credentials.getSecret and specify the key vault URL and key vault secret."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 34,
    "title": "Question 34",
    "text": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "You have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway."
      },
      {
        "type": "text",
        "value": "You need to copy data from Database1 to Warehouse1."
      },
      {
        "type": "text",
        "value": "Which item should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "an Apache Spark job definition",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a data pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a Dataflow Gen1 dataflow",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "an eventstream",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 35,
    "title": "Question 35",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.putSecret and specify the key vault URL and key vault secret.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have an Azure key vault named KeyVault1 that contains secrets."
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:"
      },
      {
        "type": "text",
        "value": "• Loads stage data to the target tables in a lakehouse"
      },
      {
        "type": "text",
        "value": "• Triggers the refresh of a semantic model"
      },
      {
        "type": "text",
        "value": "You plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes."
      },
      {
        "type": "text",
        "value": "You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "text",
        "value": "Use notebookutils.credentials.putSecret and specify the key vault URL and key vault secret."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 36,
    "title": "Question 36",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.getSecret and specify the key vault URL and the name of a linked service.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have an Azure key vault named KeyVault1 that contains secrets."
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:"
      },
      {
        "type": "text",
        "value": "• Loads stage data to the target tables in a lakehouse"
      },
      {
        "type": "text",
        "value": "• Triggers the refresh of a semantic model"
      },
      {
        "type": "text",
        "value": "You plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes."
      },
      {
        "type": "text",
        "value": "You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token."
      },
      {
        "type": "text",
        "value": "Solution: You use the following code segment:"
      },
      {
        "type": "text",
        "value": "Use notebookutils.credentials.getSecret and specify the key vault URL and the name of a linked service."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 37,
    "title": "Question 37",
    "text": "DRAG DROP\n-\nYou have two Fabric notebooks named Load_Salesperson and Load_Orders that read data from Parquet files in a lakehouse. Load_Salesperson writes to a Delta table named dim_salesperson. Load_Orders writes to a Delta table named fact_orders and is dependent on the successful execution of Load_Salesperson.\nYou need to implement a pattern to dynamically execute Load_Salesperson and Load_Orders in the appropriate order by using a notebook.\nHow should you complete the code? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have two Fabric notebooks named Load_Salesperson and Load_Orders that read data from Parquet files in a lakehouse. Load_Salesperson writes to a Delta table named dim_salesperson. Load_Orders writes to a Delta table named fact_orders and is dependent on the successful execution of Load_Salesperson."
      },
      {
        "type": "text",
        "value": "You need to implement a pattern to dynamically execute Load_Salesperson and Load_Orders in the appropriate order by using a notebook."
      },
      {
        "type": "text",
        "value": "How should you complete the code? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image24.png"
      }
    ],
    "options": [],
    "images": [
      "images/image24.png"
    ],
    "answer_images": [
      "images/image25.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Slot 1 (DAG array key)",
          "options": [
            "activities",
            "notebooks",
            "broadcast"
          ],
          "correct": "activities"
        },
        {
          "id": "r2",
          "label": "Slot 2 (Dependency property)",
          "options": [
            "dependencies",
            "execute",
            "runMultiple"
          ],
          "correct": "dependencies"
        },
        {
          "id": "r3",
          "label": "Slot 3 (Execution method)",
          "options": [
            "runMultiple",
            "execute",
            "broadcast"
          ],
          "correct": "runMultiple"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 38,
    "title": "Question 38",
    "text": "HOTSPOT\n-\nYou have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse2.\nA team of data analysts has Viewer role access to Workspace1.\nYou create a table by running the following statement.\nYou need to ensure that the team can view only the first two characters and the last four characters of the CreditCard attribute.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse2."
      },
      {
        "type": "text",
        "value": "A team of data analysts has Viewer role access to Workspace1."
      },
      {
        "type": "text",
        "value": "You create a table by running the following statement."
      },
      {
        "type": "image",
        "value": "images/image26.png"
      },
      {
        "type": "text",
        "value": "You need to ensure that the team can view only the first two characters and the last four characters of the CreditCard attribute."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image27.png"
      }
    ],
    "options": [],
    "images": [
      "images/image26.png",
      "images/image27.png"
    ],
    "answer_images": [
      "images/image28.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "[Slot 1] ... TABLE dbo.CreditCard",
          "options": [
            "ALTER",
            "CREATE",
            "DEFAULT",
            "DROP",
            "EMAIL",
            "PARTIAL",
            "REPLACE",
            "UPDATE"
          ],
          "correct": "ALTER"
        },
        {
          "id": "r2",
          "label": "[Slot 2] ... COLUMN [CreditCard]",
          "options": [
            "ALTER",
            "CREATE",
            "DEFAULT",
            "DROP",
            "EMAIL",
            "PARTIAL",
            "REPLACE",
            "UPDATE"
          ],
          "correct": "ALTER"
        },
        {
          "id": "r3",
          "label": "[Slot 3] WITH (FUNCTION = '...', (2, \"XXXXXXXXXX\", 4) ')",
          "options": [
            "ALTER",
            "CREATE",
            "DEFAULT",
            "DROP",
            "EMAIL",
            "PARTIAL",
            "REPLACE",
            "UPDATE"
          ],
          "correct": "PARTIAL"
        }
      ]
    },
    "explanation": "• Khái niệm: Dynamic Data Masking (DDM) in Warehouse.\n• Phân tích cú pháp:\n  - Cú pháp che dữ liệu linh hoạt (Partial Masking) trong T-SQL:\n    `ALTER TABLE dbo.CreditCard`\n    `ALTER COLUMN [CreditCard]`\n    `ADD MASKED WITH (FUNCTION = 'PARTIAL(2, \"XXXXXXXXXX\", 4)')`",
    "maxSelect": 1
  },
  {
    "id": 39,
    "title": "Question 39",
    "text": "HOTSPOT\n-\nYou are building a data orchestration pattern by using a Fabric data pipeline named Dynamic Data Copy as shown in the exhibit. (Click the Exhibit tab.)\nDynamic Data Copy does NOT use parametrization.\nYou need to configure the ForEach activity to receive the list of tables to be copied.\nHow should you complete the pipeline expression? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You are building a data orchestration pattern by using a Fabric data pipeline named Dynamic Data Copy as shown in the exhibit. (Click the Exhibit tab.)"
      },
      {
        "type": "image",
        "value": "images/image29.jpeg"
      },
      {
        "type": "text",
        "value": "Dynamic Data Copy does NOT use parametrization."
      },
      {
        "type": "text",
        "value": "You need to configure the ForEach activity to receive the list of tables to be copied."
      },
      {
        "type": "text",
        "value": "How should you complete the pipeline expression? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image30.png"
      }
    ],
    "options": [],
    "images": [
      "images/image29.jpeg",
      "images/image30.png"
    ],
    "answer_images": [
      "images/image31.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Lookup Activity Name",
          "options": [
            "Lookup Schema and Table",
            "Batch Object Copy",
            "Extraction Loop",
            "Dynamic Data Copy"
          ],
          "correct": "Lookup Schema and Table"
        },
        {
          "id": "r2",
          "label": "Output Property",
          "options": [
            "output.value",
            "output",
            "output.count",
            "output.pipelineReturnValue"
          ],
          "correct": "output.value"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 40,
    "title": "Question 40",
    "text": "HOTSPOT\n-\nYou have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named DimCustomers. DimCustomers contains the following columns:\n• CustomerName\n• CustomerID\n• BirthDate\n• EmailAddress\nYou need to configure security to meet the following requirements:\n• BirthDate in DimCustomer must be masked and display 1900-01-01.\n• EmailAddress in DimCustomer must be masked and display only the first leading character and the last five characters.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\ndefault()\nPartial()",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named DimCustomers. DimCustomers contains the following columns:"
      },
      {
        "type": "text",
        "value": "• CustomerName"
      },
      {
        "type": "text",
        "value": "• CustomerID"
      },
      {
        "type": "text",
        "value": "• BirthDate"
      },
      {
        "type": "text",
        "value": "• EmailAddress"
      },
      {
        "type": "text",
        "value": "You need to configure security to meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• BirthDate in DimCustomer must be masked and display 1900-01-01."
      },
      {
        "type": "text",
        "value": "• EmailAddress in DimCustomer must be masked and display only the first leading character and the last five characters."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image32.png"
      },
      {
        "type": "text",
        "value": "default()"
      },
      {
        "type": "text",
        "value": "Partial()"
      }
    ],
    "options": [],
    "images": [
      "images/image32.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "BirthDate in DimCustomer (display 1900-01-01)",
          "options": [
            "'default()'",
            "'partial(1900-01-01)'",
            "'random(1900-01-01, 1900-01-01)'"
          ],
          "correct": "'default()'"
        },
        {
          "id": "r2",
          "label": "EmailAddress in DimCustomer (display first lead char and last 5 chars)",
          "options": [
            "'default()'",
            "'email()'",
            "'partial(1,\"@\",5)'",
            "'random(1,\"@\",5)'"
          ],
          "correct": "'partial(1,\"@\",5)'"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 41,
    "title": "Question 41",
    "text": "You have a Fabric workspace named Workspace1 that contains the following items:\n• A Microsoft Power BI report named Report1\n• A Power BI dashboard named Dashboard1\n• A semantic model named Model1\n• A lakehouse name Lakehouse1\nYour company requires that specific governance processes be implemented for the items.\nWhich items can you endorse in Fabric?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains the following items:"
      },
      {
        "type": "text",
        "value": "• A Microsoft Power BI report named Report1"
      },
      {
        "type": "text",
        "value": "• A Power BI dashboard named Dashboard1"
      },
      {
        "type": "text",
        "value": "• A semantic model named Model1"
      },
      {
        "type": "text",
        "value": "• A lakehouse name Lakehouse1"
      },
      {
        "type": "text",
        "value": "Your company requires that specific governance processes be implemented for the items."
      },
      {
        "type": "text",
        "value": "Which items can you endorse in Fabric?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Lakehouse1, Model1, and Dashboard1 only",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Lakehouse1, Model1, Report1 and Dashboard1",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Report1 and Dashboard1 only",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Model1, Report1, and Dashboard1 only",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Lakehouse1, Model1, and Report1 only",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Fabric Item Endorsement Capability.\n• Phân tích đáp án đúng (E):\n  - Trong Fabric, bạn có thể cấp huy hiệu Endorsement (Promoted / Certified) cho **Lakehouse, Semantic Model và Report**. Dashboard không hỗ trợ huy hiệu Endorsement.",
    "maxSelect": 1
  },
  {
    "id": 42,
    "title": "Question 42",
    "text": "You have a Fabric workspace named Workspace1.\nYour company acquires GitHub licenses.\nYou need to configure source control for Workpace1 to use GitHub. The solution must follow the principle of least privilege.\nWhich permissions do you require to ensure that you can commit code to GitHub?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1."
      },
      {
        "type": "text",
        "value": "Your company acquires GitHub licenses."
      },
      {
        "type": "text",
        "value": "You need to configure source control for Workpace1 to use GitHub. The solution must follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Which permissions do you require to ensure that you can commit code to GitHub?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Actions (Read and write) and Contents (Read and write)",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Actions (Read and write) only",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Contents (Read and write) only",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Contents (Read) and Commit statuses (Read and write)",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: GitHub Integration Least Privilege.\n• Phân tích đáp án đúng (C - Contents (Read and write) only):\n  - Để commit mã nguồn từ Fabric Workspace sang GitHub Repo với quyền tối thiểu (Least Privilege), ứng dụng chỉ cần quyền **Contents (Read and write)** trên GitHub.",
    "maxSelect": 1
  },
  {
    "id": 43,
    "title": "Question 43",
    "text": "You have a Fabric workspace named Workspace1.\nYou plan to configure Git integration for Workspace1 by using an Azure DevOps Git repository.\nAn Azure DevOps admin creates the required artifacts to support the integration of Workspace1.\nWhich details do you require to perform the integration?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1."
      },
      {
        "type": "text",
        "value": "You plan to configure Git integration for Workspace1 by using an Azure DevOps Git repository."
      },
      {
        "type": "text",
        "value": "An Azure DevOps admin creates the required artifacts to support the integration of Workspace1."
      },
      {
        "type": "text",
        "value": "Which details do you require to perform the integration?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "the organization, project, Git repository, and branch",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "the personal access token (PAT) for Git authentication and the Git repository URL",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "the project, Git repository, branch, and Git folder",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "the Git repository URL and the Git folder",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Azure DevOps Git Integration.\n• Phân tích đáp án đúng (A):\n  - Để tích hợp Git từ Azure DevOps vào Fabric Workspace, bạn cần cung cấp 4 thông tin: **Organization, Project, Git Repository, và Branch**.",
    "maxSelect": 1
  },
  {
    "id": 44,
    "title": "Question 44",
    "text": "You have a Fabric workspace that contains a lakehouse and a semantic model named Model1.\nYou use a notebook named Notebook1 to ingest and transform data from an external data source.\nYou need to execute Notebook1 as part of a data pipeline named Pipeline1. The process must meet the following requirements:\n• Run daily at 07:00 AM UTC.\n• Attempt to retry Notebook1 twice if the notebook fails.\n• After Notebook1 executes successfully, refresh Model1.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse and a semantic model named Model1."
      },
      {
        "type": "text",
        "value": "You use a notebook named Notebook1 to ingest and transform data from an external data source."
      },
      {
        "type": "text",
        "value": "You need to execute Notebook1 as part of a data pipeline named Pipeline1. The process must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Run daily at 07:00 AM UTC."
      },
      {
        "type": "text",
        "value": "• Attempt to retry Notebook1 twice if the notebook fails."
      },
      {
        "type": "text",
        "value": "• After Notebook1 executes successfully, refresh Model1."
      },
      {
        "type": "text",
        "value": "Which three actions should you perform? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "From the Schedule settings of Pipeline1, set the time zone to UTC.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Set the Retry setting of the Notebook activity to 2.",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "From the Schedule settings of Notebook1, set the time zone to UTC.",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Set the Retry setting of the Semantic model refresh activity to 2.",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Pipeline Scheduling & Retry Settings.\n• Phân tích 3 đáp án đúng (A, B, C):\n  - **A**: Đặt hoạt động Refresh Semantic Model sau hoạt động Notebook và nối bằng điều kiện *On Success*.\n  - **B**: Đặt múi giờ Schedule của Pipeline1 là UTC.\n  - **C**: Cấu hình thuộc tính *Retry* của hoạt động Notebook là 2.",
    "maxSelect": 3
  },
  {
    "id": 45,
    "title": "Question 45",
    "text": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys.\nDW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year.\nYou have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values.\nUsers report that the performance of some of the reports has degraded over time and some visuals show errors.\nYou need to resolve the performance issues. The solution must meet the following requirements:\nProvide the best query performance.\nMinimize operational costs.\nWhich should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys."
      },
      {
        "type": "text",
        "value": "DW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year."
      },
      {
        "type": "text",
        "value": "You have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values."
      },
      {
        "type": "text",
        "value": "Users report that the performance of some of the reports has degraded over time and some visuals show errors."
      },
      {
        "type": "text",
        "value": "You need to resolve the performance issues. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Provide the best query performance."
      },
      {
        "type": "text",
        "value": "Minimize operational costs."
      },
      {
        "type": "text",
        "value": "Which should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Change the MD5 hash to SHA256.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Increase the capacity.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Enable V-Order.",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Modify the surrogate keys to use a different data type.",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Create views.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Direct Lake Performance & V-Order Optimization.\n• Phân tích đáp án đúng (C - Enable V-Order):\n  - **V-Order** là công nghệ nén và sắp xếp dữ liệu tối ưu cho định dạng Delta/Parquet trong Fabric, giúp tăng tốc độ đọc dữ liệu cực nhanh cho các báo cáo Power BI Direct Lake mà không tốn thêm chi phí.",
    "maxSelect": 1
  },
  {
    "id": 46,
    "title": "Question 46",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nYou plan to create a data pipeline named Pipeline1 to ingest data into Lakehouse1. You will use a parameter named param1 to pass an external value into Pipeline1. The param1 parameter has a data type of int.\nYou need to ensure that the pipeline expression returns param1 as an int value.\nHow should you specify the parameter value?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1."
      },
      {
        "type": "text",
        "value": "You plan to create a data pipeline named Pipeline1 to ingest data into Lakehouse1. You will use a parameter named param1 to pass an external value into Pipeline1. The param1 parameter has a data type of int."
      },
      {
        "type": "text",
        "value": "You need to ensure that the pipeline expression returns param1 as an int value."
      },
      {
        "type": "text",
        "value": "How should you specify the parameter value?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "\"@pipeline().parameters.param1\"",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "\"@{pipeline().parameters.param1}\"",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "\"@{pipeline().parameters.[param1]}\"",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "\"@@{pipeline().parameters.param1}\"",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 47,
    "title": "Question 47",
    "text": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Workspace1 contains the following items:\n• A Dataflow Gen2 dataflow that copies data from an on-premises Microsoft SQL Server database to Lakehouse1\n• A notebook that transforms files and loads the data to Lakehouse1\n• A data pipeline that loads a CSV file to Lakehouse1\nYou need to develop an orchestration solution in Fabric that will load each item one after the other. The solution must be scheduled to run every 15 minutes.\nWhich type of item should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Workspace1 contains the following items:"
      },
      {
        "type": "text",
        "value": "• A Dataflow Gen2 dataflow that copies data from an on-premises Microsoft SQL Server database to Lakehouse1"
      },
      {
        "type": "text",
        "value": "• A notebook that transforms files and loads the data to Lakehouse1"
      },
      {
        "type": "text",
        "value": "• A data pipeline that loads a CSV file to Lakehouse1"
      },
      {
        "type": "text",
        "value": "You need to develop an orchestration solution in Fabric that will load each item one after the other. The solution must be scheduled to run every 15 minutes."
      },
      {
        "type": "text",
        "value": "Which type of item should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "notebook",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "warehouse",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Dataflow Gen2 dataflow",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "data pipeline",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Data Pipeline Orchestration in Fabric.\n• Phân tích đáp án đúng (D - data pipeline):\n  - **Data Pipeline** là công cụ duy nhất trong Fabric hỗ trợ lập lịch (mỗi 15 phút) và điều khiển luồng công việc (Orchestration) chạy tuần tự giữa Dataflow Gen2, Notebook và Pipeline khác.",
    "maxSelect": 1
  },
  {
    "id": 48,
    "title": "Question 48",
    "text": "You are building a Fabric notebook named MasterNotebook1 in a workspace. MasterNotebook1 contains the following code.\nYou need to ensure that the notebooks are executed in the following sequence:\n1. Notebook_03\n2. Notebook_01\n3. Notebook_02\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "You are building a Fabric notebook named MasterNotebook1 in a workspace. MasterNotebook1 contains the following code."
      },
      {
        "type": "image",
        "value": "images/image33.jpeg"
      },
      {
        "type": "text",
        "value": "You need to ensure that the notebooks are executed in the following sequence:"
      },
      {
        "type": "text",
        "value": "1. Notebook_03"
      },
      {
        "type": "text",
        "value": "2. Notebook_01"
      },
      {
        "type": "text",
        "value": "3. Notebook_02"
      },
      {
        "type": "text",
        "value": "Which two actions should you perform? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Add dependencies to the execution of Notebook_03.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Split the Directed Acyclic Graph (DAG) definition into three separate definitions.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Add dependencies to the execution of Notebook_02.",
        "isCorrect": true
      },
      {
        "letter": "E",
        "text": "Change the concurrency to 3.",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image33.jpeg"
    ],
    "answer_images": [],
    "notes": [],
    "maxSelect": 2
  },
  {
    "id": 49,
    "title": "Question 49",
    "text": "You have a Fabric workspace that contains a data pipeline named Pipeline1 as shown in the exhibit. (Click the Exhibit tab.)\nWhat will occur the next time Pipeline1 runs?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a data pipeline named Pipeline1 as shown in the exhibit. (Click the Exhibit tab.)"
      },
      {
        "type": "image",
        "value": "images/image34.jpeg"
      },
      {
        "type": "text",
        "value": "What will occur the next time Pipeline1 runs?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Copy_kdi will run first, and then Execute procedure1 will run.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Execute procedure1 will run first, and then Copy_kdi will run.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Execute procedure1 will run and Copy_kdi will be skipped.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Copy_kdi will run and Execute procedure1 will be skipped.",
        "isCorrect": true
      },
      {
        "letter": "E",
        "text": "Both activities will run simultaneously.",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "Both activities will be skipped.",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image34.jpeg"
    ],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 50,
    "title": "Question 50",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to ensure that WorkspaceA can be configured for source control.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "• Products"
      },
      {
        "type": "text",
        "value": "• ProductCategories"
      },
      {
        "type": "text",
        "value": "• ProductSubcategories"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "• DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "• DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "• Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "• Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "• Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "• Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "• In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "• The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "• The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "• The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to ensure that WorkspaceA can be configured for source control."
      },
      {
        "type": "text",
        "value": "Which two actions should you perform? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "From Tenant setting, set Users can synchronize workspace items with their Git repositories to Enabled.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "From Tenant setting, set Users can sync workspace items with GitHub repositories to Enabled.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Configure WorkspaceA to use a Premium Per User (PPU) license.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Assign WorkspaceA to Cap1.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Workspace Git Synchronization Tenant Setting.\n• Phân tích 2 đáp án đúng (A, D):\n  - **A**: Bật Tenant Setting *\"Users can synchronize workspace items with their Git repositories\"*.\n  - **D**: Gán WorkspaceA vào Capacity (Cap1) để sử dụng các tính năng nâng cao như Git Integration.",
    "maxSelect": 2
  },
  {
    "id": 51,
    "title": "Question 51",
    "text": "HOTSPOT\n-\nYou have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named Customer. Customer contains the following data.\nYou have an internal Microsoft Entra user named User1 that has an email address of user1@contoso.com.\nYou need to provide User1 with access to the Customer table. The solution must prevent User1 from accessing the CreditCard column.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nGRANT SELECT ON Customers(CustomerID, FirstName, LastName, Phone) TO [User1@contoso.com] is corrected. I tested",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named Customer. Customer contains the following data."
      },
      {
        "type": "image",
        "value": "images/image35.jpeg"
      },
      {
        "type": "text",
        "value": "You have an internal Microsoft Entra user named User1 that has an email address of user1@contoso.com."
      },
      {
        "type": "text",
        "value": "You need to provide User1 with access to the Customer table. The solution must prevent User1 from accessing the CreditCard column."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "GRANT SELECT ON Customers(CustomerID, FirstName, LastName, Phone) TO [User1@contoso.com] is corrected. I tested"
      }
    ],
    "options": [],
    "images": [
      "images/image35.jpeg"
    ],
    "answer_images": [
      "images/image36.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "GRANT Command Action",
          "options": [
            "SELECT",
            "ALTER",
            "EXECUTE",
            "READ",
            "VIEW"
          ],
          "correct": "SELECT"
        },
        {
          "id": "r2",
          "label": "TO Grantee Target",
          "options": [
            "[user1@contoso.com]",
            "User1",
            "[User1]"
          ],
          "correct": "[user1@contoso.com]"
        }
      ]
    },
    "explanation": "• Khái niệm: Column-Level Security (CLS) in Warehouse.\n• Phân tích cú pháp:\n  - Để cấp quyền xem bảng Customer nhưng ẨN cột CreditCard (CLS), ta dùng lệnh GRANT SELECT trên danh sách cột cụ thể:\n    `GRANT SELECT ON Customers(CustomerID, FirstName, LastName, Phone) TO [user1@contoso.com]`",
    "maxSelect": 1
  },
  {
    "id": 52,
    "title": "Question 52",
    "text": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod.\nYou need to deploy an Eventhouse as part of the deployment process.\nWhat should you use to add the Eventhouse to the deployment process?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod."
      },
      {
        "type": "text",
        "value": "You need to deploy an Eventhouse as part of the deployment process."
      },
      {
        "type": "text",
        "value": "What should you use to add the Eventhouse to the deployment process?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "an Azure DevOps pipeline",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "an eventstream",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "GitHub Actions",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 53,
    "title": "Question 53",
    "text": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives."
      },
      {
        "type": "text",
        "value": "You plan to implement row-level security (RLS)."
      },
      {
        "type": "text",
        "value": "You need to ensure that the sales representatives can see only their respective data."
      },
      {
        "type": "text",
        "value": "Which warehouse object do you require to implement RLS?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "TRIGGER",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "SCHEMA",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "FUNCTION",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "DATABASE ROLE",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 54,
    "title": "Question 54",
    "text": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives."
      },
      {
        "type": "text",
        "value": "You plan to implement row-level security (RLS)."
      },
      {
        "type": "text",
        "value": "You need to ensure that the sales representatives can see only their respective data."
      },
      {
        "type": "text",
        "value": "Which warehouse object do you require to implement RLS?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "SECURITY POLICY",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "TABLE",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "TRIGGER",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "STORED PROCEDURE",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 55,
    "title": "Question 55",
    "text": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys.\nDW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year.\nYou have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values.\nUsers report that the performance of some of the reports has degraded over time and some visuals show errors.\nYou need to resolve the performance issues. The solution must meet the following requirements:\n• Provide the best query performance.\n• Minimize operational costs.\nWhich should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys."
      },
      {
        "type": "text",
        "value": "DW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year."
      },
      {
        "type": "text",
        "value": "You have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values."
      },
      {
        "type": "text",
        "value": "Users report that the performance of some of the reports has degraded over time and some visuals show errors."
      },
      {
        "type": "text",
        "value": "You need to resolve the performance issues. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Provide the best query performance."
      },
      {
        "type": "text",
        "value": "• Minimize operational costs."
      },
      {
        "type": "text",
        "value": "Which should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Create views.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Modify the surrogate keys to use a different data type.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Change the MD5 hash to SHA256.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Increase the capacity.",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Disable V-Order on the warehouse.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 56,
    "title": "Question 56",
    "text": "HOTSPOT -\nYou have a Fabric workspace that contains a warehouse named DW1. DW1 contains the following tables and columns.\nYou need to create an output that presents the summarized values of all the order quantities by year and product. The results must include a summary of the order quantities at the year level for all the products.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nSELECT YEAR\nROLLUP(YEAR(SO.ModifiedDATE), P.Name)",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named DW1. DW1 contains the following tables and columns."
      },
      {
        "type": "image",
        "value": "images/image37.png"
      },
      {
        "type": "text",
        "value": "You need to create an output that presents the summarized values of all the order quantities by year and product. The results must include a summary of the order quantities at the year level for all the products."
      },
      {
        "type": "text",
        "value": "How should you complete the code? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "SELECT YEAR"
      },
      {
        "type": "text",
        "value": "ROLLUP(YEAR(SO.ModifiedDATE), P.Name)"
      }
    ],
    "options": [],
    "images": [
      "images/image37.png"
    ],
    "answer_images": [
      "images/image38.png"
    ],
    "notes": [
      "Selected Answer: A"
    ],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Date Function Select",
          "options": [
            "SELECT YEAR",
            "SELECT CAST",
            "SELECT CONVERT"
          ],
          "correct": "SELECT YEAR"
        },
        {
          "id": "r2",
          "label": "GROUP BY Function",
          "options": [
            "ROLLUP(YEAR(SO.ModifiedDate), P.Name)",
            "CUBE(YEAR(SO.ModifiedDate), P.Name)",
            "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))"
          ],
          "correct": "ROLLUP(YEAR(SO.ModifiedDate), P.Name)"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 57,
    "title": "Question 57",
    "text": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1.\nYou plan to deploy Warehouse 1 to a new workspace named Workspace2.\nAs part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort and provide detailed information about the invalid references.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "You plan to deploy Warehouse 1 to a new workspace named Workspace2."
      },
      {
        "type": "text",
        "value": "As part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort and provide detailed information about the invalid references."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a dbt project",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a deployment pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a Python script",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a database project",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 58,
    "title": "Question 58",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Data is ingested into Lakehouse1 as one flat table. The table contains the following columns.\nYou plan to load the data into a dimensional model and implement a star schema. From the original flat table, you create two tables named FactSales and DimProduct. You will track changes in DimProduct.\nYou need to prepare the data.\nWhich three columns should you include in the DimProduct table? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Data is ingested into Lakehouse1 as one flat table. The table contains the following columns."
      },
      {
        "type": "image",
        "value": "images/image39.png"
      },
      {
        "type": "text",
        "value": "You plan to load the data into a dimensional model and implement a star schema. From the original flat table, you create two tables named FactSales and DimProduct. You will track changes in DimProduct."
      },
      {
        "type": "text",
        "value": "You need to prepare the data."
      },
      {
        "type": "text",
        "value": "Which three columns should you include in the DimProduct table? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Date",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "ProductName",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "ProductColor",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "TransactionID",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "SalesAmount",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "ProductID",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image39.png"
    ],
    "answer_images": [],
    "notes": [],
    "maxSelect": 3
  },
  {
    "id": 59,
    "title": "Question 59",
    "text": "You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1.\nIn Workspace1, you create a new notebook named Notebook2.\nYou need to ensure that you can attach Notebook2 to the same Apache Spark session as Notebook1.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1."
      },
      {
        "type": "text",
        "value": "In Workspace1, you create a new notebook named Notebook2."
      },
      {
        "type": "text",
        "value": "You need to ensure that you can attach Notebook2 to the same Apache Spark session as Notebook1."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Enable high concurrency for notebooks.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Enable dynamic allocation for the Spark pool.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Change the runtime version.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Increase the number of executors.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 60,
    "title": "Question 60",
    "text": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains the following tables:\nOrders -\nCustomer -\nEmployee -\nThe Employee table contains Personally Identifiable Information (PII).\nA data engineer is building a workflow that requires writing data to the Customer table, however, the user does NOT have the elevated permissions required to view the contents of the Employee table.\nYou need to ensure that the data engineer can write data to the Customer table without reading data from the Employee table.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains the following tables:"
      },
      {
        "type": "text",
        "value": "Orders -"
      },
      {
        "type": "text",
        "value": "Customer -"
      },
      {
        "type": "text",
        "value": "Employee -"
      },
      {
        "type": "text",
        "value": "The Employee table contains Personally Identifiable Information (PII)."
      },
      {
        "type": "text",
        "value": "A data engineer is building a workflow that requires writing data to the Customer table, however, the user does NOT have the elevated permissions required to view the contents of the Employee table."
      },
      {
        "type": "text",
        "value": "You need to ensure that the data engineer can write data to the Customer table without reading data from the Employee table."
      },
      {
        "type": "text",
        "value": "Which three actions should you perform? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Share Lakehouse1 with the data engineer.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Assign the data engineer the Contributor role for Workspace2.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Assign the data engineer the Viewer role for Workspace2.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Assign the data engineer the Contributor role for Workspace1.",
        "isCorrect": true
      },
      {
        "letter": "E",
        "text": "Migrate the Employee table from Lakehouse1 to Lakehouse2.",
        "isCorrect": true
      },
      {
        "letter": "F",
        "text": "Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.",
        "isCorrect": true
      },
      {
        "letter": "G",
        "text": "Assign the data engineer the Viewer role for Workspace1.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Data Isolation across Workspaces.\n• Phân tích 3 bước đúng (D, E, F):\n  - **F**: Tạo Workspace2 và Lakehouse2 mới.\n  - **E**: Di chuyển bảng Employee (chứa PII) sang Lakehouse2.\n  - **D**: Gán vai trò Contributor cho Data Engineer tại Workspace1 để ghi bảng Customer mà không có quyền xem Lakehouse2.",
    "maxSelect": 3
  },
  {
    "id": 61,
    "title": "Question 61",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to implement the solution for the book reviews.\nWhich should you do?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "Sales Date -"
      },
      {
        "type": "text",
        "value": "Author -"
      },
      {
        "type": "text",
        "value": "Price -"
      },
      {
        "type": "text",
        "value": "Units -"
      },
      {
        "type": "text",
        "value": "SKU -"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "Sales -"
      },
      {
        "type": "text",
        "value": "Fabric Admins -"
      },
      {
        "type": "text",
        "value": "Streaming Admins -"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to implement the solution for the book reviews."
      },
      {
        "type": "text",
        "value": "Which should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Create a Dataflow Gen2 dataflow.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create a shortcut.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Enable external data sharing.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Create a data pipeline.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Lakehouse Shortcuts for External Data Access.\n• Phân tích đáp án đúng (B - Create a shortcut):\n  - Để đọc dữ liệu book reviews từ Amazon S3 vào Lakehouse mà KHÔNG cần sao chép dữ liệu (zero-copy), giải pháp là tạo **Shortcut**.",
    "maxSelect": 1
  },
  {
    "id": 62,
    "title": "Question 62",
    "text": "You have an Azure event hub. Each event contains the following fields:\nBikepointID -\nStreet -\nNeighbourhood -\nLatitude -\nLongitude -\nNo_Bikes -\nNo_Empty_Docks -\nYou need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have an Azure event hub. Each event contains the following fields:"
      },
      {
        "type": "text",
        "value": "BikepointID -"
      },
      {
        "type": "text",
        "value": "Street -"
      },
      {
        "type": "text",
        "value": "Neighbourhood -"
      },
      {
        "type": "text",
        "value": "Latitude -"
      },
      {
        "type": "text",
        "value": "Longitude -"
      },
      {
        "type": "text",
        "value": "No_Bikes -"
      },
      {
        "type": "text",
        "value": "No_Empty_Docks -"
      },
      {
        "type": "text",
        "value": "You need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a KQL queryset",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "an eventstream",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a streaming dataset",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Apache Spark Structured Streaming",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 63,
    "title": "Question 63",
    "text": "HOTSPOT -\nYou are building a data loading pattern for Fabric notebook workloads.\nYou have the following code segment:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You are building a data loading pattern for Fabric notebook workloads."
      },
      {
        "type": "text",
        "value": "You have the following code segment:"
      },
      {
        "type": "image",
        "value": "images/image40.png"
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image41.png"
      }
    ],
    "options": [],
    "images": [
      "images/image40.png",
      "images/image41.png"
    ],
    "answer_images": [
      "images/image42.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "The target table will always be overwritten.",
          "correct": "No"
        },
        {
          "id": "r2",
          "label": "The merge operation will always run.",
          "correct": "No"
        },
        {
          "id": "r3",
          "label": "The loading pattern supports both full and incremental loading requirements.",
          "correct": "Yes"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 64,
    "title": "Question 64",
    "text": "HOTSPOT -\nYou have a Fabric workspace that contains two lakehouses named Lakehouse1 and Lakehouse2. Lakehouse1 contains staging data in a Delta table named Orderlines. Lakehouse2 contains a Type 2 slowly changing dimension (SCD) dimension table named Dim_Customer.\nYou need to build a query that will combine data from Orderlines and Dim_Customer to create a new fact table named Fact_Orders. The new table must meet the following requirements:\nEnable the analysis of customer orders based on historical attributes.\nEnable the analysis of customer orders based on the current attributes.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains two lakehouses named Lakehouse1 and Lakehouse2. Lakehouse1 contains staging data in a Delta table named Orderlines. Lakehouse2 contains a Type 2 slowly changing dimension (SCD) dimension table named Dim_Customer."
      },
      {
        "type": "text",
        "value": "You need to build a query that will combine data from Orderlines and Dim_Customer to create a new fact table named Fact_Orders. The new table must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Enable the analysis of customer orders based on historical attributes."
      },
      {
        "type": "text",
        "value": "Enable the analysis of customer orders based on the current attributes."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image43.png"
      }
    ],
    "options": [],
    "images": [
      "images/image43.png"
    ],
    "answer_images": [
      "images/image44.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Start validity join condition",
          "options": [
            "o.OrderDate >= c.valid_from_datetime",
            "c.is_current = 1",
            "o.OrderDate > c.valid_to_datetime"
          ],
          "correct": "o.OrderDate >= c.valid_from_datetime"
        },
        {
          "id": "r2",
          "label": "End validity join condition",
          "options": [
            "o.OrderDate < c.valid_to_datetime",
            "c.is_current = 1",
            "o.OrderDate <= c.valid_from_datetime"
          ],
          "correct": "o.OrderDate < c.valid_to_datetime"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 65,
    "title": "Question 65",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements\nTrigger the process when a new file is added.\nProvide the highest throughput.\nWhich type of item should you use to ingest the data?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1."
      },
      {
        "type": "text",
        "value": "In an external data source, you have data files that are 500 GB each. A new file is added every day."
      },
      {
        "type": "text",
        "value": "You need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements"
      },
      {
        "type": "text",
        "value": "Trigger the process when a new file is added."
      },
      {
        "type": "text",
        "value": "Provide the highest throughput."
      },
      {
        "type": "text",
        "value": "Which type of item should you use to ingest the data?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Eventstream",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Dataflow Gen2",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Streaming dataset",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Data pipeline",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Large File Ingestion Performance.\n• Phân tích đáp án đúng (D/A - Data pipeline):\n  - **Data Pipeline** (Copy Activity) cung cấp băng thông (throughput) cao nhất và hỗ trợ Event-based Trigger khi có file 500GB mới xuất hiện.",
    "maxSelect": 1
  },
  {
    "id": 66,
    "title": "Question 66",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements\nTrigger the process when a new file is added.\nProvide the highest throughput.\nWhich type of item should you use to ingest the data?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1."
      },
      {
        "type": "text",
        "value": "In an external data source, you have data files that are 500 GB each. A new file is added every day."
      },
      {
        "type": "text",
        "value": "You need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements"
      },
      {
        "type": "text",
        "value": "Trigger the process when a new file is added."
      },
      {
        "type": "text",
        "value": "Provide the highest throughput."
      },
      {
        "type": "text",
        "value": "Which type of item should you use to ingest the data?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Data pipeline",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Environment",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "KQL queryset",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Dataflow Gen2",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 67,
    "title": "Question 67",
    "text": "You have a Fabric workspace that contains an eventhouse and a KQL database named Database1. Database1 has the following:\nA table named Table1 -\nA table named Table2 -\nAn update policy named Policy1 -\nPolicy1 sends data from Table1 to Table2.\nThe following is a sample of the data in Table2.\nRecently, the following actions were performed on Table1:\nAn additional element named temperature was added to the StreamData column.\nThe data type of the Timestamp column was changed to date.\nThe data type of the DeviceId column was changed to string.\nYou plan to load additional records to Table2.\nWhich two records will load from Table1 to Table2? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventhouse and a KQL database named Database1. Database1 has the following:"
      },
      {
        "type": "text",
        "value": "A table named Table1 -"
      },
      {
        "type": "text",
        "value": "A table named Table2 -"
      },
      {
        "type": "text",
        "value": "An update policy named Policy1 -"
      },
      {
        "type": "text",
        "value": "Policy1 sends data from Table1 to Table2."
      },
      {
        "type": "text",
        "value": "The following is a sample of the data in Table2."
      },
      {
        "type": "image",
        "value": "images/image45.png"
      },
      {
        "type": "text",
        "value": "Recently, the following actions were performed on Table1:"
      },
      {
        "type": "text",
        "value": "An additional element named temperature was added to the StreamData column."
      },
      {
        "type": "text",
        "value": "The data type of the Timestamp column was changed to date."
      },
      {
        "type": "text",
        "value": "The data type of the DeviceId column was changed to string."
      },
      {
        "type": "text",
        "value": "You plan to load additional records to Table2."
      },
      {
        "type": "text",
        "value": "Which two records will load from Table1 to Table2? Each correct answer presents a complete solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "image": "images/image46.png",
        "text": "",
        "isCorrect": true
      },
      {
        "letter": "B",
        "image": "images/image47.png",
        "text": "",
        "isCorrect": false
      },
      {
        "letter": "C",
        "image": "images/image48.png",
        "text": "",
        "isCorrect": false
      },
      {
        "letter": "D",
        "image": "images/image49.png",
        "text": "",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image45.png"
    ],
    "answer_images": [
      "images/image46.png",
      "images/image47.png",
      "images/image48.png",
      "images/image49.png"
    ],
    "notes": [],
    "maxSelect": 2
  },
  {
    "id": 68,
    "title": "Question 68",
    "text": "HOTSPOT -\nYou have a Fabric workspace.\nYou are debugging a statement and discover the following issues:\nSometimes, the statement fails to return all the expected rows.\nThe PurchaseDate output column is NOT in the expected format of mmm dd, yy.\nYou need to resolve the issues. The solution must ensure that the data types of the results are retained. The results can contain blank cells.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace."
      },
      {
        "type": "text",
        "value": "You are debugging a statement and discover the following issues:"
      },
      {
        "type": "text",
        "value": "Sometimes, the statement fails to return all the expected rows."
      },
      {
        "type": "text",
        "value": "The PurchaseDate output column is NOT in the expected format of mmm dd, yy."
      },
      {
        "type": "text",
        "value": "You need to resolve the issues. The solution must ensure that the data types of the results are retained. The results can contain blank cells."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image50.png"
      }
    ],
    "options": [],
    "images": [
      "images/image50.png"
    ],
    "answer_images": [
      "images/image51.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "ItemName Conversion Function",
          "options": [
            ",try_cast(item_name as varchar(20))",
            ",convert(varchar(20), item_name)",
            ",convert(varchar(max), item_name)"
          ],
          "correct": ",try_cast(item_name as varchar(20))"
        },
        {
          "id": "r2",
          "label": "PurchaseDate Formatting Function",
          "options": [
            ",convert(varchar, purchase_date, 7)",
            ",convert(varchar, purchase_date, 109)",
            ",convert(varchar, purchase_date, 112)"
          ],
          "correct": ",convert(varchar, purchase_date, 7)"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 69,
    "title": "Question 69",
    "text": "You are developing a data pipeline named Pipeline1.\nYou need to add a Copy data activity that will copy data from a Snowflake data source to a Fabric warehouse.\nWhat should you configure?",
    "elements": [
      {
        "type": "text",
        "value": "You are developing a data pipeline named Pipeline1."
      },
      {
        "type": "text",
        "value": "You need to add a Copy data activity that will copy data from a Snowflake data source to a Fabric warehouse."
      },
      {
        "type": "text",
        "value": "What should you configure?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Degree of copy parallelism",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Fault tolerance",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Enable staging",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Enable logging",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 70,
    "title": "Question 70",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You change the join type to kind=outer.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format."
      },
      {
        "type": "image",
        "value": "images/image52.png"
      },
      {
        "type": "text",
        "value": "Reference contains reference data in the following format."
      },
      {
        "type": "image",
        "value": "images/image53.png"
      },
      {
        "type": "text",
        "value": "Both tables contain millions of rows."
      },
      {
        "type": "text",
        "value": "You have the following KQL queryset."
      },
      {
        "type": "text",
        "value": "You need to reduce how long it takes to run the KQL queryset."
      },
      {
        "type": "text",
        "value": "Solution: You change the join type to kind=outer."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image52.png",
      "images/image53.png"
    ],
    "answer_images": [
      "images/image54.png"
    ],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 71,
    "title": "Question 71",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You change project to extend.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format."
      },
      {
        "type": "image",
        "value": "images/image52.png"
      },
      {
        "type": "text",
        "value": "Reference contains reference data in the following format."
      },
      {
        "type": "image",
        "value": "images/image53.png"
      },
      {
        "type": "text",
        "value": "Both tables contain millions of rows."
      },
      {
        "type": "text",
        "value": "You have the following KQL queryset."
      },
      {
        "type": "text",
        "value": "You need to reduce how long it takes to run the KQL queryset."
      },
      {
        "type": "text",
        "value": "Solution: You change project to extend."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image52.png",
      "images/image53.png"
    ],
    "answer_images": [
      "images/image54.png"
    ],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 72,
    "title": "Question 72",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to resolve the sales data issue. The solution must minimize the amount of data transferred.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "Sales Date -"
      },
      {
        "type": "text",
        "value": "Author -"
      },
      {
        "type": "text",
        "value": "Price -"
      },
      {
        "type": "text",
        "value": "Units -"
      },
      {
        "type": "text",
        "value": "SKU -"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "Sales -"
      },
      {
        "type": "text",
        "value": "Fabric Admins -"
      },
      {
        "type": "text",
        "value": "Streaming Admins -"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to resolve the sales data issue. The solution must minimize the amount of data transferred."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Spilt the dataflow into two dataflows.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Configure scheduled refresh for the dataflow.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Configure incremental refresh for the dataflow. Set Store rows from the past to 1 Month.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Configure incremental refresh for the dataflow. Set Refresh rows from the past to 1 Year.",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "Configure incremental refresh for the dataflow. Set Refresh rows from the past to 1 Month.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 73,
    "title": "Question 73",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You move the filter to line 02.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format."
      },
      {
        "type": "image",
        "value": "images/image52.png"
      },
      {
        "type": "text",
        "value": "Reference contains reference data in the following format."
      },
      {
        "type": "image",
        "value": "images/image53.png"
      },
      {
        "type": "text",
        "value": "Both tables contain millions of rows."
      },
      {
        "type": "text",
        "value": "You have the following KQL queryset."
      },
      {
        "type": "text",
        "value": "You need to reduce how long it takes to run the KQL queryset."
      },
      {
        "type": "text",
        "value": "Solution: You move the filter to line 02."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": false
      }
    ],
    "images": [
      "images/image52.png",
      "images/image53.png"
    ],
    "answer_images": [
      "images/image54.png"
    ],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 74,
    "title": "Question 74",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You add the make_list() function to the output columns.\nDoes this meet the goal?",
    "elements": [
      {
        "type": "text",
        "value": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution."
      },
      {
        "type": "text",
        "value": "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
      },
      {
        "type": "text",
        "value": "You have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format."
      },
      {
        "type": "image",
        "value": "images/image52.png"
      },
      {
        "type": "text",
        "value": "Reference contains reference data in the following format."
      },
      {
        "type": "image",
        "value": "images/image53.png"
      },
      {
        "type": "text",
        "value": "Both tables contain millions of rows."
      },
      {
        "type": "text",
        "value": "You have the following KQL queryset."
      },
      {
        "type": "text",
        "value": "You need to reduce how long it takes to run the KQL queryset."
      },
      {
        "type": "text",
        "value": "Solution: You add the make_list() function to the output columns."
      },
      {
        "type": "text",
        "value": "Does this meet the goal?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "No",
        "isCorrect": true
      }
    ],
    "images": [
      "images/image52.png",
      "images/image53.png"
    ],
    "answer_images": [
      "images/image54.png"
    ],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 75,
    "title": "Question 75",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to create a workflow for the new book cover images.\nWhich two components should you include in the workflow? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to create a workflow for the new book cover images."
      },
      {
        "type": "text",
        "value": "Which two components should you include in the workflow? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a time-based schedule",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a streaming dataflow",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a blob storage action",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a data pipeline",
        "isCorrect": true
      },
      {
        "letter": "E",
        "text": "a notebook that uses Apache Spark Structured Streaming",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "a reflex item",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Eventstream for Near-Real-Time (NRT) REST API.\n• Phân tích đáp án đúng (D - an eventstream):\n  - **Eventstream** là công cụ native chuyên dụng để nạp và xử lý luồng dữ liệu thời gian thực / cận thời gian thực từ REST API hoặc Event Hubs.",
    "maxSelect": 2
  },
  {
    "id": 76,
    "title": "Question 76",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nWhat should you recommend that the data engineering team use to ingest the SEO data?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "What should you recommend that the data engineering team use to ingest the SEO data?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a streaming dataflow",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a streaming dataset",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a notebook that uses Apache Spark Structured Streaming",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "an eventstream",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 77,
    "title": "Question 77",
    "text": "HOTSPOT\n-\nYou have a Fabric warehouse named DW1 that contains four staging tables named ProductCategory, ProductSubcategory, Product, and SalesOrder. ProductCategory, ProductSubcategory, and Product are used often in analytical queries.\nYou need to implement a star schema for DW1. The solution must minimize development effort.\nWhich design approach should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1 that contains four staging tables named ProductCategory, ProductSubcategory, Product, and SalesOrder. ProductCategory, ProductSubcategory, and Product are used often in analytical queries."
      },
      {
        "type": "text",
        "value": "You need to implement a star schema for DW1. The solution must minimize development effort."
      },
      {
        "type": "text",
        "value": "Which design approach should you use? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image55.png"
      }
    ],
    "options": [],
    "images": [
      "images/image55.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "ProductCategory, ProductSubcategory, Product configuration",
          "options": [
            "Denormalized into a single product dimension table",
            "Added to the model as individual tables",
            "Denormalized by being added to the SalesOrder table"
          ],
          "correct": "Denormalized into a single product dimension table"
        },
        {
          "id": "r2",
          "label": "Joining key configuration",
          "options": [
            "The unique system generated identifier",
            "The product name and the date",
            "The product category name"
          ],
          "correct": "The unique system generated identifier"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 78,
    "title": "Question 78",
    "text": "HOTSPOT\n-\nYour company has three newly created data engineering teams named Team1, Team2, and Team3 that plan to use Fabric. The teams have the following personas:\n• Team1 consists of members who currently use Microsoft Power BI. The team wants to transform data by using by a low-code approach.\n• Team2 consists of members that have a background in Python programming. The team wants to use PySpark code to transform data.\n• Team3 consists of members who currently use Azure Data Factory. The team wants to move data between source and sink environments by using the least amount of effort.\nYou need to recommend tools for the teams based on their current personas.\nWhat should you recommend for each team? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Your company has three newly created data engineering teams named Team1, Team2, and Team3 that plan to use Fabric. The teams have the following personas:"
      },
      {
        "type": "text",
        "value": "• Team1 consists of members who currently use Microsoft Power BI. The team wants to transform data by using by a low-code approach."
      },
      {
        "type": "text",
        "value": "• Team2 consists of members that have a background in Python programming. The team wants to use PySpark code to transform data."
      },
      {
        "type": "text",
        "value": "• Team3 consists of members who currently use Azure Data Factory. The team wants to move data between source and sink environments by using the least amount of effort."
      },
      {
        "type": "text",
        "value": "You need to recommend tools for the teams based on their current personas."
      },
      {
        "type": "text",
        "value": "What should you recommend for each team? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [],
    "images": [],
    "answer_images": [
      "images/image57.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Team1 (low-code approach / Power BI background)",
          "options": [
            "Data pipelines",
            "Notebooks",
            "Dataflow Gen2 dataflow"
          ],
          "correct": "Dataflow Gen2 dataflow"
        },
        {
          "id": "r2",
          "label": "Team2 (Python programming background)",
          "options": [
            "Data pipelines",
            "Notebooks",
            "Dataflow Gen2 dataflow"
          ],
          "correct": "Notebooks"
        },
        {
          "id": "r3",
          "label": "Team3 (Azure Data Factory background / move data least effort)",
          "options": [
            "Data pipelines",
            "Notebooks",
            "Dataflow Gen2 dataflow"
          ],
          "correct": "Data pipelines"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 79,
    "title": "Question 79",
    "text": "HOTSPOT\n-\nYou plan to process the following three datasets by using Fabric:\nDataset1: This dataset will be added to Fabric and will have a unique primary key between the source and the destination. The unique primary key will be an integer and will start from 1 and have an increment of 1.\nDataset2: This dataset contains semi-structured data that uses bulk data transfer. The dataset must be handled in one process between the source and the destination. The data transformation process will include the use of custom visuals to understand and work with the dataset in development mode.\nDataset3: This dataset is in a lakehouse. The data will be bulk loaded. The data transformation process will include row-based windowing functions during the loading process.\nYou need to identify which type of item to use for the datasets. The solution must minimize development effort and use built-in functionality, when possible.\nWhat should you identify for each dataset? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nDataset1 -> Dataflow Gen2\nDataset2 -> Notebook\nDataset3 -> Dataflow Gen2 (the target is Lakehouse, we cannot use T-SQL)",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You plan to process the following three datasets by using Fabric:"
      },
      {
        "type": "text",
        "value": "Dataset1: This dataset will be added to Fabric and will have a unique primary key between the source and the destination. The unique primary key will be an integer and will start from 1 and have an increment of 1."
      },
      {
        "type": "text",
        "value": "Dataset2: This dataset contains semi-structured data that uses bulk data transfer. The dataset must be handled in one process between the source and the destination. The data transformation process will include the use of custom visuals to understand and work with the dataset in development mode."
      },
      {
        "type": "text",
        "value": "Dataset3: This dataset is in a lakehouse. The data will be bulk loaded. The data transformation process will include row-based windowing functions during the loading process."
      },
      {
        "type": "text",
        "value": "You need to identify which type of item to use for the datasets. The solution must minimize development effort and use built-in functionality, when possible."
      },
      {
        "type": "text",
        "value": "What should you identify for each dataset? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "Dataset1 -> Dataflow Gen2"
      },
      {
        "type": "text",
        "value": "Dataset2 -> Notebook"
      },
      {
        "type": "text",
        "value": "Dataset3 -> Dataflow Gen2 (the target is Lakehouse, we cannot use T-SQL)"
      }
    ],
    "options": [],
    "images": [],
    "answer_images": [
      "images/image59.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Dataset1 (Unique primary key integer 1 increment 1)",
          "options": [
            "Dataflow Gen2 dataflow",
            "A notebook",
            "A T-SQL statement"
          ],
          "correct": "Dataflow Gen2 dataflow"
        },
        {
          "id": "r2",
          "label": "Dataset2 (Semi-structured data bulk transfer, custom visuals)",
          "options": [
            "Dataflow Gen2 dataflow",
            "A notebook",
            "A T-SQL statement"
          ],
          "correct": "A notebook"
        },
        {
          "id": "r3",
          "label": "Dataset3 (Lakehouse data, row-based windowing functions)",
          "options": [
            "Dataflow Gen2 dataflow",
            "A KQL queryset",
            "A T-SQL statement"
          ],
          "correct": "Dataflow Gen2 dataflow"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 80,
    "title": "Question 80",
    "text": "HOTSPOT\n-\nYou have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Status_Target that has the following columns:\n• Key\n• Status\n• LastModified\nThe data source contains a table named Status_Source that has the same columns as Status_Target. Status_Source is used to populate Status_Target.\nIn a notebook name Notebook1, you load Status_Source to a DataFrame named sourceDF and Status_Target to a DataFrame named targetDF.\nYou need to implement an incremental loading pattern by using Notebook1. The solution must meet the following requirements:\n• For all the matching records that have the same value of key, update the value of LastModified in Status_Target to the value of LastModified in Status_Source.\n• Insert all the records that exist in Status_Source that do NOT exist in Status_Target.\n• Set the value of Status in Status_Target to inactive for all the records that were last modified more than seven days ago and that do NOT exist in Status_Source.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Status_Target that has the following columns:"
      },
      {
        "type": "text",
        "value": "• Key"
      },
      {
        "type": "text",
        "value": "• Status"
      },
      {
        "type": "text",
        "value": "• LastModified"
      },
      {
        "type": "text",
        "value": "The data source contains a table named Status_Source that has the same columns as Status_Target. Status_Source is used to populate Status_Target."
      },
      {
        "type": "text",
        "value": "In a notebook name Notebook1, you load Status_Source to a DataFrame named sourceDF and Status_Target to a DataFrame named targetDF."
      },
      {
        "type": "text",
        "value": "You need to implement an incremental loading pattern by using Notebook1. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• For all the matching records that have the same value of key, update the value of LastModified in Status_Target to the value of LastModified in Status_Source."
      },
      {
        "type": "text",
        "value": "• Insert all the records that exist in Status_Source that do NOT exist in Status_Target."
      },
      {
        "type": "text",
        "value": "• Set the value of Status in Status_Target to inactive for all the records that were last modified more than seven days ago and that do NOT exist in Status_Source."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image60.png"
      }
    ],
    "options": [],
    "images": [
      "images/image60.png"
    ],
    "answer_images": [
      "images/image61.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Matching keys update condition",
          "options": [
            ".whenMatchedUpdate(",
            ".whenMatchedInsert(",
            ".whenNotMatchedBySourceInsert("
          ],
          "correct": ".whenMatchedUpdate("
        },
        {
          "id": "r2",
          "label": "Not matched insert condition",
          "options": [
            ".whenNotMatchedInsert(",
            ".whenMatchedUpdate(",
            ".whenNotMatchedBySourceUpdate("
          ],
          "correct": ".whenNotMatchedInsert("
        },
        {
          "id": "r3",
          "label": "Old records inactive condition (> 7 days)",
          "options": [
            ".whenNotMatchedBySourceUpdate(",
            ".whenMatchedInsert(",
            ".whenNotMatchedInsert("
          ],
          "correct": ".whenNotMatchedBySourceUpdate("
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 81,
    "title": "Question 81",
    "text": "DRAG DROP\n-\nYou are building a data loading pattern by using a Fabric data pipeline. The source is an Azure SQL database that contains 25 tables. The destination is a lakehouse.\nIn a warehouse, you create a control table named Control.Object as shown in the exhibit. (Click the Exhibit tab.)\nYou need to build a data pipeline that will support the dynamic ingestion of the tables listed in the control table by using a single execution.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You are building a data loading pattern by using a Fabric data pipeline. The source is an Azure SQL database that contains 25 tables. The destination is a lakehouse."
      },
      {
        "type": "text",
        "value": "In a warehouse, you create a control table named Control.Object as shown in the exhibit. (Click the Exhibit tab.)"
      },
      {
        "type": "image",
        "value": "images/image62.png"
      },
      {
        "type": "text",
        "value": "You need to build a data pipeline that will support the dynamic ingestion of the tables listed in the control table by using a single execution."
      },
      {
        "type": "text",
        "value": "Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
      },
      {
        "type": "image",
        "value": "images/image63.png"
      }
    ],
    "options": [],
    "images": [
      "images/image62.png",
      "images/image63.png"
    ],
    "answer_images": [
      "images/image64.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Step 1 (First pipeline activity)",
          "options": [
            "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
            "Add a Get metadata activity to query Control.Object...",
            "Add an Until activity to iterate over..."
          ],
          "correct": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy."
        },
        {
          "id": "r2",
          "label": "Step 2 (Second pipeline activity)",
          "options": [
            "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
            "Add an Until activity...",
            "Add a Get metadata activity..."
          ],
          "correct": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
        },
        {
          "id": "r3",
          "label": "Step 3 (Third inner activity)",
          "options": [
            "Add a Copy data activity as an inner activity to the iterator activity.",
            "Add a Lookup activity...",
            "Add a Dataflow Gen2 dataflow..."
          ],
          "correct": "Add a Copy data activity as an inner activity to the iterator activity."
        }
      ]
    },
    "maxSelect": 3
  },
  {
    "id": 82,
    "title": "Question 82",
    "text": "You are implementing a medallion architecture in a Fabric lakehouse.\nYou plan to create a dimension table that will contain the following columns:\n• ID\n• CustomerCode\n• CustomerName\n• CustomerAddress\n• CustomerLocation\n• ValidFrom\n• ValidTo\nYou need to ensure that the table supports the analysis of historical sales data by customer location at the time of each sale.\nWhich type of slowly changing dimension (SCD) should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You are implementing a medallion architecture in a Fabric lakehouse."
      },
      {
        "type": "text",
        "value": "You plan to create a dimension table that will contain the following columns:"
      },
      {
        "type": "text",
        "value": "• ID"
      },
      {
        "type": "text",
        "value": "• CustomerCode"
      },
      {
        "type": "text",
        "value": "• CustomerName"
      },
      {
        "type": "text",
        "value": "• CustomerAddress"
      },
      {
        "type": "text",
        "value": "• CustomerLocation"
      },
      {
        "type": "text",
        "value": "• ValidFrom"
      },
      {
        "type": "text",
        "value": "• ValidTo"
      },
      {
        "type": "text",
        "value": "You need to ensure that the table supports the analysis of historical sales data by customer location at the time of each sale."
      },
      {
        "type": "text",
        "value": "Which type of slowly changing dimension (SCD) should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Type 2",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Type 0",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Type 1",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Type 3",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Slowly Changing Dimension (SCD) Type 2.\n• Phân tích đáp án đúng (A - Type 2):\n  - SCD Type 2 lưu trữ đầy đủ lịch sử thay đổi của thuộc tính (sử dụng cột `ValidFrom`, `ValidTo`), cho phép phân tích dữ liệu bán hàng theo vị trí khách hàng tại đúng thời điểm giao dịch xảy ra.",
    "maxSelect": 1
  },
  {
    "id": 83,
    "title": "Question 83",
    "text": "HOTSPOT -\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to recommend a method to populate the POS1 data to the lakehouse medallion layers.\nWhat should you recommend for each layer? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to recommend a method to populate the POS1 data to the lakehouse medallion layers."
      },
      {
        "type": "text",
        "value": "What should you recommend for each layer? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image65.png"
      }
    ],
    "options": [],
    "images": [
      "images/image60.png"
    ],
    "answer_images": [
      "images/image61.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Bronze layer",
          "options": [
            "A Dataflow Gen2 dataflow",
            "A notebook",
            "A pipeline Copy activity",
            "A pipeline stored procedure"
          ],
          "correct": "A Dataflow Gen2 dataflow"
        },
        {
          "id": "r2",
          "label": "Silver layer",
          "options": [
            "A Dataflow Gen2 dataflow",
            "A notebook",
            "A pipeline Copy activity",
            "A pipeline stored procedure"
          ],
          "correct": "A notebook"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 84,
    "title": "Question 84",
    "text": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table named Table1 in a lakehouse. The streaming data is sourced from motorway sensors and represents the speed of cars.\nYou need to add a transformation to EventStream1 to average the car speeds. The speeds must be grouped by non-overlapping and contiguous time intervals of one minute. Each event must belong to exactly one window.\nWhich windowing function should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table named Table1 in a lakehouse. The streaming data is sourced from motorway sensors and represents the speed of cars."
      },
      {
        "type": "text",
        "value": "You need to add a transformation to EventStream1 to average the car speeds. The speeds must be grouped by non-overlapping and contiguous time intervals of one minute. Each event must belong to exactly one window."
      },
      {
        "type": "text",
        "value": "Which windowing function should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "sliding",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "hopping",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "tumbling",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "session",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 85,
    "title": "Question 85",
    "text": "HOTSPOT\n-\nYou have a table in a Fabric lakehouse that contains the following data.\nYou have a notebook that contains the following code segment.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nYes No No",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a table in a Fabric lakehouse that contains the following data."
      },
      {
        "type": "image",
        "value": "images/image67.png"
      },
      {
        "type": "text",
        "value": "You have a notebook that contains the following code segment."
      },
      {
        "type": "image",
        "value": "images/image68.png"
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "Yes No No"
      }
    ],
    "options": [],
    "images": [
      "images/image67.png",
      "images/image68.png"
    ],
    "answer_images": [
      "images/image69.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "Line 01 will replace all the null and empty values in CustomerName column with Unknown.",
          "correct": "Yes"
        },
        {
          "id": "r2",
          "label": "Line 02 will extract the value before @ character and generate a new column named Username.",
          "correct": "No"
        },
        {
          "id": "r3",
          "label": "Line 03 will extract year value from OrderDate column and keep only the first occurrence for each year.",
          "correct": "No"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 86,
    "title": "Question 86",
    "text": "DRAG DROP\n-\nYou have a Fabric workspace that contains an eventhouse named Eventhouse1.\nIn Eventhouse1, you plan to create a table named DeviceStreamData in a KQL database. The table will contain data based on the following sample.\nYou need to use a KQL query to develop the solution for Eventhouse1.\nWhich three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventhouse named Eventhouse1."
      },
      {
        "type": "text",
        "value": "In Eventhouse1, you plan to create a table named DeviceStreamData in a KQL database. The table will contain data based on the following sample."
      },
      {
        "type": "image",
        "value": "images/image70.jpeg"
      },
      {
        "type": "text",
        "value": "You need to use a KQL query to develop the solution for Eventhouse1."
      },
      {
        "type": "text",
        "value": "Which three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order."
      },
      {
        "type": "image",
        "value": "images/image71.png"
      }
    ],
    "options": [],
    "images": [
      "images/image70.jpeg",
      "images/image71.png"
    ],
    "answer_images": [
      "images/image72.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Segment 1 (KQL Table creation command)",
          "options": [
            ".create table EventStreamData (",
            ".create function EventStreamData (",
            "StreamData:long)"
          ],
          "correct": ".create table EventStreamData ("
        },
        {
          "id": "r2",
          "label": "Segment 2 (Column definitions 1)",
          "options": [
            "TimeStamp:datetime, DeviceId:string",
            "StreamData:dynamic",
            "StreamData:long"
          ],
          "correct": "TimeStamp:datetime, DeviceId:string"
        },
        {
          "id": "r3",
          "label": "Segment 3 (Column definitions 2)",
          "options": [
            "StreamData:dynamic",
            "TimeStamp:datetime",
            "StreamData:long"
          ],
          "correct": "StreamData:dynamic"
        }
      ]
    },
    "maxSelect": 3
  },
  {
    "id": 87,
    "title": "Question 87",
    "text": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "You have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway."
      },
      {
        "type": "text",
        "value": "You need to copy data from Database1 to Warehouse1."
      },
      {
        "type": "text",
        "value": "Which item should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a data pipeline",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "an Apache Spark job definition",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a streaming dataflow",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a notebook",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 88,
    "title": "Question 88",
    "text": "You have a Fabric warehouse named DW1 that contains a Type 2 slowly changing dimension (SCD) dimension table named DimCustomer. DimCustomer contains 100 columns and 20 million rows. The columns are of various data types, including int, varchar, date, and varbinary.\nYou need to identify incoming changes to the table and update the records when there is a change. The solution must minimize resource consumption.\nWhat should you use to identify changes to attributes?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1 that contains a Type 2 slowly changing dimension (SCD) dimension table named DimCustomer. DimCustomer contains 100 columns and 20 million rows. The columns are of various data types, including int, varchar, date, and varbinary."
      },
      {
        "type": "text",
        "value": "You need to identify incoming changes to the table and update the records when there is a change. The solution must minimize resource consumption."
      },
      {
        "type": "text",
        "value": "What should you use to identify changes to attributes?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a hash function to compare the attributes in the source table.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "a direct attributes comparison across the attributes in the DimCustomer table.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a direct attributes comparison for the attributes in the source table.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a hash function to compare the attributes in the DimCustomer table.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Hash Function Comparison for Change Detection.\n• Phân tích đáp án đúng (A):\n  - Sử dụng hàm **Hash (băm)** để so sánh chuỗi kết hợp của tất cả các cột thuộc tính ở nguồn giúp phát hiện sự thay đổi cực nhanh và tiêu tốn ít tài nguyên tính toán nhất đối với bảng lớn.",
    "maxSelect": 1
  },
  {
    "id": 89,
    "title": "Question 89",
    "text": "You have an Azure SQL database named DB1.\nIn a Fabric workspace, you deploy an eventstream named EventStreamDB1 to stream record changes from DB1 into a lakehouse.\nYou discover that events are NOT being propagated to EventStreamDB1.\nYou need to ensure that the events are propagated to EventStreamDB1.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have an Azure SQL database named DB1."
      },
      {
        "type": "text",
        "value": "In a Fabric workspace, you deploy an eventstream named EventStreamDB1 to stream record changes from DB1 into a lakehouse."
      },
      {
        "type": "text",
        "value": "You discover that events are NOT being propagated to EventStreamDB1."
      },
      {
        "type": "text",
        "value": "You need to ensure that the events are propagated to EventStreamDB1."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Create a read-only replica of DB1.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create an Azure Stream Analytics job.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Enable Extended Events for DB1.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Enable change data capture (CDC) for DB1.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Change Data Capture (CDC) for Eventstream.\n• Phân tích đáp án đúng (D - Enable change data capture (CDC) for DB1):\n  - Eventstream cần tính năng **CDC (Change Data Capture)** trên Azure SQL Database để tự động bắt và đẩy các sự kiện thay đổi dữ liệu vào Lakehouse.",
    "maxSelect": 1
  },
  {
    "id": 90,
    "title": "Question 90",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to recommend a solution to resolve the MAR1 connectivity issues. The solution must minimize development effort.\nWhat should you recommend?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "• Products"
      },
      {
        "type": "text",
        "value": "• ProductCategories"
      },
      {
        "type": "text",
        "value": "• ProductSubcategories"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "• DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "• DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "• Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "• Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "• Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "• Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "• In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "• The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "• The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "• The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to recommend a solution to resolve the MAR1 connectivity issues. The solution must minimize development effort."
      },
      {
        "type": "text",
        "value": "What should you recommend?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Add a ForEach activity to the data pipeline.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Configure retries for the Copy data activity.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Call a notebook from the data pipeline.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Configure Fault tolerance for the Copy data activity.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 91,
    "title": "Question 91",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to recommend a solution for handling old files. The solution must meet the technical requirements.\nWhat should you include in the recommendation?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "• Products"
      },
      {
        "type": "text",
        "value": "• ProductCategories"
      },
      {
        "type": "text",
        "value": "• ProductSubcategories"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "• DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "• DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "• Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "• Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "• Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "• Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "• In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "• The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "• The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "• The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to recommend a solution for handling old files. The solution must meet the technical requirements."
      },
      {
        "type": "text",
        "value": "What should you include in the recommendation?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "a data pipeline that includes a Copy data activity",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a data pipeline that includes a Delete data activity",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a notebook that runs the VACUUM command",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "a notebook that runs the OPTIMIZE command",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Handling Old Files in Delta Lake (VACUUM).\n• Phân tích đáp án đúng (C - a notebook that runs the VACUUM command):\n  - Lệnh `VACUUM` trong Delta Lake được dùng để dọn dẹp các file Parquet cũ không còn được tham chiếu bởi log giao dịch Delta nữa.",
    "maxSelect": 1
  },
  {
    "id": 92,
    "title": "Question 92",
    "text": "DRAG DROP\n-\nYou have a KQL database that contains a table named Readings.\nYou need to build a KQL query to compare the MeterReading value of each row to the previous row base on the Timestamp value.\nA sample of the expected output is shown in the following table.\nHow should you complete the query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You have a KQL database that contains a table named Readings."
      },
      {
        "type": "text",
        "value": "You need to build a KQL query to compare the MeterReading value of each row to the previous row base on the Timestamp value."
      },
      {
        "type": "text",
        "value": "A sample of the expected output is shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image73.jpeg"
      },
      {
        "type": "text",
        "value": "How should you complete the query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image74.png"
      }
    ],
    "options": [],
    "images": [
      "images/image73.jpeg",
      "images/image74.png"
    ],
    "answer_images": [
      "images/image75.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "KQL Operator 1 (Line 03)",
          "options": [
            "sort",
            "extend",
            "lookup",
            "project",
            "summarize"
          ],
          "correct": "sort"
        },
        {
          "id": "r2",
          "label": "KQL Operator 2 (Line 04)",
          "options": [
            "extend",
            "lookup",
            "project",
            "sort",
            "take"
          ],
          "correct": "extend"
        },
        {
          "id": "r3",
          "label": "KQL Operator 3 (Line 05)",
          "options": [
            "project",
            "extend",
            "lookup",
            "sort",
            "evaluate"
          ],
          "correct": "project"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 93,
    "title": "Question 93",
    "text": "HOTSPOT\n-\nYou need to recommend a Fabric streaming solution that will use the sources shown in the following table.\nThe solution must minimize development effort.\nWhat should you include in the recommendation for each source? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You need to recommend a Fabric streaming solution that will use the sources shown in the following table."
      },
      {
        "type": "image",
        "value": "images/image76.jpeg"
      },
      {
        "type": "text",
        "value": "The solution must minimize development effort."
      },
      {
        "type": "text",
        "value": "What should you include in the recommendation for each source? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image77.png"
      }
    ],
    "options": [],
    "images": [
      "images/image76.jpeg",
      "images/image77.png"
    ],
    "answer_images": [
      "images/image78.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Source1 (Semi-structured data, bigint column, 10 MB)",
          "options": [
            "Apache Spark Structured Streaming",
            "An eventstream",
            "A data pipeline",
            "A streaming dataflow"
          ],
          "correct": "Apache Spark Structured Streaming"
        },
        {
          "id": "r2",
          "label": "Source2 (Structured data, 19 columns, 25 MB)",
          "options": [
            "Apache Spark Structured Streaming",
            "An eventstream",
            "A data pipeline",
            "A streaming dataflow"
          ],
          "correct": "Apache Spark Structured Streaming"
        },
        {
          "id": "r3",
          "label": "Source3 (Unstructured data, images, 5 MB)",
          "options": [
            "Apache Spark Structured Streaming",
            "An eventstream",
            "A data pipeline",
            "A streaming dataflow"
          ],
          "correct": "Apache Spark Structured Streaming"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 94,
    "title": "Question 94",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to ensure that usage of the data in the Amazon S3 bucket meets the technical requirements.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to ensure that usage of the data in the Amazon S3 bucket meets the technical requirements."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Create a workspace identity and enable high concurrency for the notebooks.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create a shortcut and ensure that caching is disabled for the workspace.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Create a workspace identity and use the identity in a data pipeline.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Create a shortcut and ensure that caching is enabled for the workspace.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 95,
    "title": "Question 95",
    "text": "HOTSPOT\n-\nYou are building a data loading pattern for Fabric notebook workloads.\nYou have the following code segment.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "You are building a data loading pattern for Fabric notebook workloads."
      },
      {
        "type": "text",
        "value": "You have the following code segment."
      },
      {
        "type": "image",
        "value": "images/image79.png"
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image80.png"
      }
    ],
    "options": [],
    "images": [
      "images/image79.png",
      "images/image80.png"
    ],
    "answer_images": [
      "images/image81.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "The target table will always be overwritten.",
          "correct": "No"
        },
        {
          "id": "r2",
          "label": "The merge operation will always run.",
          "correct": "No"
        },
        {
          "id": "r3",
          "label": "The code supports incremental loading and the initial table creation.",
          "correct": "Yes"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 96,
    "title": "Question 96",
    "text": "You have an Azure event hub. Each event contains the following fields:\n• BikepointID\n• Street\n• Neighbourhood\n• Latitude\n• Longitude\n• No_Bikes\n• No_Empty_Docks\nYou need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse.\nData retention in case of failure is required to be two days.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have an Azure event hub. Each event contains the following fields:"
      },
      {
        "type": "text",
        "value": "• BikepointID"
      },
      {
        "type": "text",
        "value": "• Street"
      },
      {
        "type": "text",
        "value": "• Neighbourhood"
      },
      {
        "type": "text",
        "value": "• Latitude"
      },
      {
        "type": "text",
        "value": "• Longitude"
      },
      {
        "type": "text",
        "value": "• No_Bikes"
      },
      {
        "type": "text",
        "value": "• No_Empty_Docks"
      },
      {
        "type": "text",
        "value": "You need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse."
      },
      {
        "type": "text",
        "value": "Data retention in case of failure is required to be two days."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "an eventstream",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Apache Spark Structured Streaming",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "a streaming dataset",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a KQL queryset",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 97,
    "title": "Question 97",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen2 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to create a workflow for the new book cover images.\nWhich two components should you include in the workflow? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen2 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to create a workflow for the new book cover images."
      },
      {
        "type": "text",
        "value": "Which two components should you include in the workflow? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "an activator item",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "a data pipeline",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a blob storage action",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a time-based schedule",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "a streaming dataflow",
        "isCorrect": false
      },
      {
        "letter": "F",
        "text": "a notebook that uses Apache Spark Structured Streaming",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 2
  },
  {
    "id": 98,
    "title": "Question 98",
    "text": "HOTSPOT -\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to create the product dimension.\nHow should you complete the Apache Spark SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nLEFT OUTER JOIN\nINNER JOIN\nIsActive = 1",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to create the product dimension."
      },
      {
        "type": "text",
        "value": "How should you complete the Apache Spark SQL code? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image82.png"
      },
      {
        "type": "text",
        "value": "LEFT OUTER JOIN"
      },
      {
        "type": "text",
        "value": "INNER JOIN"
      },
      {
        "type": "text",
        "value": "IsActive = 1"
      }
    ],
    "options": [],
    "images": [
      "images/image82.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Join between ContosoLake.Products and ContosoLake.ProductSubCategories",
          "options": [
            "LEFT OUTER JOIN",
            "INNER JOIN",
            "FULL JOIN",
            "LEFT ANTI JOIN"
          ],
          "correct": "INNER JOIN"
        },
        {
          "id": "r2",
          "label": "Join between ContosoLake.ProductSubCategories and ContosoLake.ProductCategories",
          "options": [
            "INNER JOIN",
            "LEFT OUTER JOIN",
            "FULL JOIN",
            "LEFT ANTI JOIN"
          ],
          "correct": "INNER JOIN"
        },
        {
          "id": "r3",
          "label": "WHERE condition for active products",
          "options": [
            "IsActive = 1;",
            "CategoryID = 1;",
            "CategoryName is not null;"
          ],
          "correct": "IsActive = 1;"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 99,
    "title": "Question 99",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to populate the MAR1 data in the bronze layer.\nWhich two types of activities should you include in the pipeline? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to populate the MAR1 data in the bronze layer."
      },
      {
        "type": "text",
        "value": "Which two types of activities should you include in the pipeline? Each correct answer presents part of the solution."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "ForEach",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Copy data",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "WebHook",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Stored procedure",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 2
  },
  {
    "id": 100,
    "title": "Question 100",
    "text": "HOTSPOT -\nYou have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains the following tables and columns.\nYou need to denormalize the tables and include the ContractType and StartDate columns in the Employee table. The solution must meet the following requirements:\nEnsure that the StartDate column is of the date data type.\nEnsure that all the rows from the Employee table are preserved and include any matching rows from the Contract table.\nEnsure that the result set displays the total number of employees per contract type for all the contract types that have more than two employees.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nCONVERT, LEFT OUTER, HAVING",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains the following tables and columns."
      },
      {
        "type": "image",
        "value": "images/image83.png"
      },
      {
        "type": "text",
        "value": "You need to denormalize the tables and include the ContractType and StartDate columns in the Employee table. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Ensure that the StartDate column is of the date data type."
      },
      {
        "type": "text",
        "value": "Ensure that all the rows from the Employee table are preserved and include any matching rows from the Contract table."
      },
      {
        "type": "text",
        "value": "Ensure that the result set displays the total number of employees per contract type for all the contract types that have more than two employees."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "CONVERT, LEFT OUTER, HAVING"
      }
    ],
    "options": [],
    "images": [
      "images/image83.png"
    ],
    "answer_images": [
      "images/image84.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Slot 1: StartDate data type conversion",
          "options": [
            "CAST",
            "CONVERT",
            "REPLACE",
            "SUBSTRING"
          ],
          "correct": "CONVERT"
        },
        {
          "id": "r2",
          "label": "Slot 2: Join type between Employee and Contract",
          "options": [
            "CROSS JOIN",
            "INNER JOIN",
            "LEFT OUTER JOIN",
            "RIGHT OUTER JOIN"
          ],
          "correct": "LEFT OUTER JOIN"
        },
        {
          "id": "r3",
          "label": "Slot 3: Filter aggregated contract types > 2",
          "options": [
            "CONTAINS",
            "HAVING",
            "UMIT",
            "WHERE"
          ],
          "correct": "HAVING"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 101,
    "title": "Question 101",
    "text": "HOTSPOT -\nYou have an Azure Event Hubs data source that contains weather data.\nYou ingest the data from the data source by using an eventstream named Eventstream1. Eventstream1 uses a lakehouse as the destination.\nYou need to batch ingest only rows from the data source where the City attribute has a value of Kansas. The filter must be added before the destination. The solution must minimize development effort.\nWhat should you use for the data processor and filtering? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n1. eventstream with an external data source\n2. eventstream processor",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have an Azure Event Hubs data source that contains weather data."
      },
      {
        "type": "text",
        "value": "You ingest the data from the data source by using an eventstream named Eventstream1. Eventstream1 uses a lakehouse as the destination."
      },
      {
        "type": "text",
        "value": "You need to batch ingest only rows from the data source where the City attribute has a value of Kansas. The filter must be added before the destination. The solution must minimize development effort."
      },
      {
        "type": "text",
        "value": "What should you use for the data processor and filtering? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image85.png"
      },
      {
        "type": "text",
        "value": "1. eventstream with an external data source"
      },
      {
        "type": "text",
        "value": "2. eventstream processor"
      }
    ],
    "options": [],
    "images": [
      "images/image85.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Data processor",
          "options": [
            "A data pipeline",
            "A Dataflow Gen2 dataflow",
            "An eventstream with a custom endpoint",
            "An eventstream with an external data source"
          ],
          "correct": "An eventstream with an external data source"
        },
        {
          "id": "r2",
          "label": "Filtering",
          "options": [
            "A Filter activity in a data pipeline",
            "A filter in a Dataflow Gen2 dataflow",
            "A KQL statement",
            "An eventstream processor"
          ],
          "correct": "An eventstream processor"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 102,
    "title": "Question 102",
    "text": "You have a Fabric workspace that contains an eventstream named Eventstream1. Eventstream1 processes data from a thermal sensor by using event stream processing, and then stores the data in a lakehouse.\nYou need to modify Eventstream1 to include the standard deviation of the temperature.\nWhich transform operator should you include in the Eventstream1 logic?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventstream named Eventstream1. Eventstream1 processes data from a thermal sensor by using event stream processing, and then stores the data in a lakehouse."
      },
      {
        "type": "text",
        "value": "You need to modify Eventstream1 to include the standard deviation of the temperature."
      },
      {
        "type": "text",
        "value": "Which transform operator should you include in the Eventstream1 logic?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Expand",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Group by",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Union",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Aggregate",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 103,
    "title": "Question 103",
    "text": "HOTSPOT -\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to troubleshoot the ad-hoc query issue.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nqueryinsights.frequently_run_queries\nnumber_of_failed_runs > 1",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "Sales Date -"
      },
      {
        "type": "text",
        "value": "Author -"
      },
      {
        "type": "text",
        "value": "Price -"
      },
      {
        "type": "text",
        "value": "Units -"
      },
      {
        "type": "text",
        "value": "SKU -"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "Sales -"
      },
      {
        "type": "text",
        "value": "Fabric Admins -"
      },
      {
        "type": "text",
        "value": "Streaming Admins -"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "You need to troubleshoot the ad-hoc query issue."
      },
      {
        "type": "text",
        "value": "How should you complete the statement? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image86.png"
      },
      {
        "type": "text",
        "value": "queryinsights.frequently_run_queries"
      },
      {
        "type": "text",
        "value": "number_of_failed_runs > 1"
      }
    ],
    "options": [],
    "images": [
      "images/image86.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "FROM catalog view",
          "options": [
            "queryinsights.frequently_run_queries",
            "queryinsights.exec_requests_history",
            "queryinsights.exec_sessions_history",
            "queryinsights.long_running_queries"
          ],
          "correct": "queryinsights.frequently_run_queries"
        },
        {
          "id": "r2",
          "label": "AND filter condition for multiple failures",
          "options": [
            "number_of_failed_runs > 1",
            "max_run_total_elapsed_time_ms > 7200000",
            "median_total_elapsed_time_ms > 7200000",
            "number_of_runs > 1"
          ],
          "correct": "number_of_failed_runs > 1"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 104,
    "title": "Question 104",
    "text": "HOTSPOT -\nYou have a Fabric workspace that contains an eventstream named EventStream1.\nYou discover that an EventStream1 transformation fails.\nYou need to find the following error information:\nThe error details, including the occurrence time\nThe total number of errors -\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nRuntime logs\nData Insight",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventstream named EventStream1."
      },
      {
        "type": "text",
        "value": "You discover that an EventStream1 transformation fails."
      },
      {
        "type": "text",
        "value": "You need to find the following error information:"
      },
      {
        "type": "text",
        "value": "The error details, including the occurrence time"
      },
      {
        "type": "text",
        "value": "The total number of errors -"
      },
      {
        "type": "text",
        "value": "What should you use? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image87.png"
      },
      {
        "type": "text",
        "value": "Runtime logs"
      },
      {
        "type": "text",
        "value": "Data Insight"
      }
    ],
    "options": [],
    "images": [
      "images/image87.png"
    ],
    "answer_images": [],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "To find the error details",
          "options": [
            "Data insights",
            "Data preview",
            "Details",
            "Runtime logs"
          ],
          "correct": "Runtime logs"
        },
        {
          "id": "r2",
          "label": "To find the total number of errors",
          "options": [
            "Data insights",
            "Data preview",
            "Details",
            "Runtime logs"
          ],
          "correct": "Data insights"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 105,
    "title": "Question 105",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”\nThe data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nWhat should you do to optimize the query experience for the business users?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview -"
      },
      {
        "type": "text",
        "value": "Litware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric Environment"
      },
      {
        "type": "text",
        "value": "Litware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1."
      },
      {
        "type": "text",
        "value": "The company has a data engineering team that uses Python for data processing."
      },
      {
        "type": "text",
        "value": "Existing Environment. Data Processing"
      },
      {
        "type": "text",
        "value": "The retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system."
      },
      {
        "type": "text",
        "value": "Litware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled."
      },
      {
        "type": "text",
        "value": "Litware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder."
      },
      {
        "type": "text",
        "value": "Existing Environment. Sales Data"
      },
      {
        "type": "text",
        "value": "Month-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes."
      },
      {
        "type": "text",
        "value": "In the source system, the sales data refreshes every six hours starting at midnight each day."
      },
      {
        "type": "text",
        "value": "The sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:"
      },
      {
        "type": "text",
        "value": "• Sales Date"
      },
      {
        "type": "text",
        "value": "• Author"
      },
      {
        "type": "text",
        "value": "• Price"
      },
      {
        "type": "text",
        "value": "• Units"
      },
      {
        "type": "text",
        "value": "• SKU"
      },
      {
        "type": "text",
        "value": "A table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail. Authors authenticate to a guest Fabric tenant by using their email address."
      },
      {
        "type": "text",
        "value": "Existing Environment. Security Groups"
      },
      {
        "type": "text",
        "value": "Litware has the following security groups:"
      },
      {
        "type": "text",
        "value": "• Sales"
      },
      {
        "type": "text",
        "value": "• Fabric Admins"
      },
      {
        "type": "text",
        "value": "• Streaming Admins"
      },
      {
        "type": "text",
        "value": "Existing Environment. Performance Issues"
      },
      {
        "type": "text",
        "value": "Business users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.”"
      },
      {
        "type": "text",
        "value": "The data engineering team wants to debug the issue and find queries that cause more than one failure."
      },
      {
        "type": "text",
        "value": "When the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process."
      },
      {
        "type": "text",
        "value": "The company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Litware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets."
      },
      {
        "type": "text",
        "value": "Litware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API."
      },
      {
        "type": "text",
        "value": "Requirements. Version Control -"
      },
      {
        "type": "text",
        "value": "Litware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege."
      },
      {
        "type": "text",
        "value": "Requirements. Governance Requirements"
      },
      {
        "type": "text",
        "value": "To control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned."
      },
      {
        "type": "text",
        "value": "Requirements. Data Requirements -"
      },
      {
        "type": "text",
        "value": "Litware identifies the following data requirements:"
      },
      {
        "type": "text",
        "value": "• Process the SEO data in near-real-time (NRT)."
      },
      {
        "type": "text",
        "value": "• Make the book reviews available in the lakehouse without making a copy of the data."
      },
      {
        "type": "text",
        "value": "• When a new book cover image arrives in the Files folder, process the image as soon as possible."
      },
      {
        "type": "text",
        "value": "What should you do to optimize the query experience for the business users?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Enable V-Order.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create and update statistics.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Run the VACUUM command.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Introduce primary keys.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 106,
    "title": "Question 106",
    "text": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nWhile monitoring Warehouse1, you discover that query performance has degraded during the last 60 minutes.\nYou need to isolate all the queries that were run during the last 60 minutes. The results must include the username of the users that submitted the queries and the query statements.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1."
      },
      {
        "type": "text",
        "value": "While monitoring Warehouse1, you discover that query performance has degraded during the last 60 minutes."
      },
      {
        "type": "text",
        "value": "You need to isolate all the queries that were run during the last 60 minutes. The results must include the username of the users that submitted the queries and the query statements."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "the Microsoft Fabric Capacity Metrics app",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "views from the queryinsights schema",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "Query activity",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "the sys.dm_exec_requests dynamic management view",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 107,
    "title": "Question 107",
    "text": "You have a Fabric workspace that contains a semantic model named Model1.\nYou need to monitor the refresh history of Model1 and visualize the refresh history in a chart.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a semantic model named Model1."
      },
      {
        "type": "text",
        "value": "You need to monitor the refresh history of Model1 and visualize the refresh history in a chart."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "the refresh history from the settings of Model1",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "a notebook",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "a Dataflow Gen2 dataflow",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "a data pipeline",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 108,
    "title": "Question 108",
    "text": "You have a Fabric workspace that contains a write-intensive warehouse named DW1. DW1 stores staging tables that are used to load a dimensional model. The tables are often read once, dropped, and then recreated to process new data.\nYou need to minimize the load time of DW1.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a write-intensive warehouse named DW1. DW1 stores staging tables that are used to load a dimensional model. The tables are often read once, dropped, and then recreated to process new data."
      },
      {
        "type": "text",
        "value": "You need to minimize the load time of DW1."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Enable V-Order.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Create statistics.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Drop statistics.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Disable V-Order.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Write-Intensive Warehouse Optimization (Disable V-Order).\n• Phân tích đáp án đúng (D - Disable V-Order):\n  - Mặc dù V-Order tăng tốc độ đọc, nhưng nó làm chậm quá trình ghi/tạo lại bảng staging. Với Warehouse chuyên ghi (write-intensive) và tạo lại bảng liên tục, **vô hiệu hóa V-Order** giúp giảm thiểu thời gian nạp dữ liệu.",
    "maxSelect": 1
  },
  {
    "id": 109,
    "title": "Question 109",
    "text": "HOTSPOT\n-\nCase Study\n-\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview\n-\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure\n-\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric\n-\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure\n-\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes\n-\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security\n-\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to ensure that the data engineers are notified if any step in populating the lakehouses fails. The solution must meet the technical requirements and minimize development effort.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Case Study"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "• Products"
      },
      {
        "type": "text",
        "value": "• ProductCategories"
      },
      {
        "type": "text",
        "value": "• ProductSubcategories"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "• DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "• DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "• Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "• Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "• Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "• Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "• In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security"
      },
      {
        "type": "text",
        "value": "-"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "• The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "• The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "• The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to ensure that the data engineers are notified if any step in populating the lakehouses fails. The solution must meet the technical requirements and minimize development effort."
      },
      {
        "type": "text",
        "value": "What should you use? To answer, select the appropriate options in the answer area."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image88.png"
      }
    ],
    "options": [],
    "images": [
      "images/image88.png"
    ],
    "answer_images": [
      "images/image89.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "To identify the failure",
          "options": [
            "A Fail activity",
            "An If condition activity",
            "An On failure dependency condition",
            "An On completion dependency condition"
          ],
          "correct": "An On failure dependency condition"
        },
        {
          "id": "r2",
          "label": "To send the notification",
          "options": [
            "A Teams activity",
            "An Invoke pipeline activity",
            "An Office365Outlook activity"
          ],
          "correct": "An Office365Outlook activity"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 110,
    "title": "Question 110",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements:\n• Trigger the process when a new file is added.\n• Provide the highest throughput.\nWhich type of item should you use to ingest the data?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1."
      },
      {
        "type": "text",
        "value": "In an external data source, you have data files that are 500 GB each. A new file is added every day."
      },
      {
        "type": "text",
        "value": "You need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "• Trigger the process when a new file is added."
      },
      {
        "type": "text",
        "value": "• Provide the highest throughput."
      },
      {
        "type": "text",
        "value": "Which type of item should you use to ingest the data?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "KQL queryset",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Streaming dataset",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Notebook",
        "isCorrect": true
      },
      {
        "letter": "D",
        "text": "Dataflow Gen2",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 111,
    "title": "Question 111",
    "text": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to schedule the population of the medallion layers to meet the technical requirements.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "Case Study -"
      },
      {
        "type": "text",
        "value": "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided."
      },
      {
        "type": "text",
        "value": "To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study."
      },
      {
        "type": "text",
        "value": "At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section."
      },
      {
        "type": "text",
        "value": "To start the case study -"
      },
      {
        "type": "text",
        "value": "To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question."
      },
      {
        "type": "text",
        "value": "Overview. Company Overview -"
      },
      {
        "type": "text",
        "value": "Contoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics."
      },
      {
        "type": "text",
        "value": "Overview. IT Structure -"
      },
      {
        "type": "text",
        "value": "The company’s IT department has a team of data analysts and a team of data engineers that use analytics systems."
      },
      {
        "type": "text",
        "value": "The data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data."
      },
      {
        "type": "text",
        "value": "The data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T-SQL."
      },
      {
        "type": "text",
        "value": "Existing Environment. Fabric -"
      },
      {
        "type": "text",
        "value": "Contoso has an F64 capacity named Cap1. All Fabric users are allowed to create items."
      },
      {
        "type": "text",
        "value": "Contoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode."
      },
      {
        "type": "text",
        "value": "Existing Environment. Source Systems"
      },
      {
        "type": "text",
        "value": "Contoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website."
      },
      {
        "type": "text",
        "value": "The company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint."
      },
      {
        "type": "text",
        "value": "Contoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions."
      },
      {
        "type": "text",
        "value": "Existing Environment. Product Data"
      },
      {
        "type": "text",
        "value": "POS1 contains a product list and related data. The data comes from the following three tables:"
      },
      {
        "type": "text",
        "value": "Products -"
      },
      {
        "type": "text",
        "value": "ProductCategories -"
      },
      {
        "type": "text",
        "value": "ProductSubcategories -"
      },
      {
        "type": "text",
        "value": "In the data, products are related to product subcategories, and subcategories are related to product categories."
      },
      {
        "type": "text",
        "value": "Existing Environment. Azure -"
      },
      {
        "type": "text",
        "value": "Contoso has a Microsoft Entra tenant that has the following mail-enabled security groups:"
      },
      {
        "type": "text",
        "value": "DataAnalysts: Contains the data analysts"
      },
      {
        "type": "text",
        "value": "DataEngineers: Contains the data engineers"
      },
      {
        "type": "text",
        "value": "Contoso has an Azure subscription."
      },
      {
        "type": "text",
        "value": "The company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric."
      },
      {
        "type": "text",
        "value": "Existing Environment. User Problems"
      },
      {
        "type": "text",
        "value": "The VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric."
      },
      {
        "type": "text",
        "value": "The data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail."
      },
      {
        "type": "text",
        "value": "Requirements. Planned Changes -"
      },
      {
        "type": "text",
        "value": "Contoso plans to create the following two lakehouses:"
      },
      {
        "type": "text",
        "value": "Lakehouse1: Will store both raw and cleansed data from the sources"
      },
      {
        "type": "text",
        "value": "Lakehouse2: Will serve data in a dimensional model to users for analytical queries"
      },
      {
        "type": "text",
        "value": "Additional items will be added to facilitate data ingestion and transformation."
      },
      {
        "type": "text",
        "value": "Contoso plans to use Azure Repos for source control in Fabric."
      },
      {
        "type": "text",
        "value": "Requirements. Technical Requirements"
      },
      {
        "type": "text",
        "value": "The new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization."
      },
      {
        "type": "text",
        "value": "Each layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers."
      },
      {
        "type": "text",
        "value": "Data imports must run simultaneously, when possible."
      },
      {
        "type": "text",
        "value": "The use of email data from the Amazon S3 bucket must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "Minimize egress costs associated with cross-cloud data access."
      },
      {
        "type": "text",
        "value": "Prevent saving a copy of the raw data in the lakehouses."
      },
      {
        "type": "text",
        "value": "Items that relate to data ingestion must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The items must be source controlled alongside other workspace items."
      },
      {
        "type": "text",
        "value": "Ingested data must land in the bronze layer of Lakehouse1 in the Delta format."
      },
      {
        "type": "text",
        "value": "No changes other than changes to the file formats must be implemented before the data lands in the bronze layer."
      },
      {
        "type": "text",
        "value": "Development effort must be minimized and a built-in connection must be used to import the source data."
      },
      {
        "type": "text",
        "value": "In the event of a connectivity error, the ingestion processes must attempt the connection again."
      },
      {
        "type": "text",
        "value": "Lakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB."
      },
      {
        "type": "text",
        "value": "Once a week, old files that are no longer referenced by a Delta table log must be removed."
      },
      {
        "type": "text",
        "value": "Requirements. Data Transformation"
      },
      {
        "type": "text",
        "value": "In the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1."
      },
      {
        "type": "text",
        "value": "Some product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer."
      },
      {
        "type": "text",
        "value": "Requirements. Data Security -"
      },
      {
        "type": "text",
        "value": "Security in Fabric must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "The data engineers must have read and write access to all the lakehouses, including the underlying files."
      },
      {
        "type": "text",
        "value": "The data analysts must only have read access to the Delta tables in the gold layer."
      },
      {
        "type": "text",
        "value": "The data analysts must NOT have access to the data in the bronze and silver layers."
      },
      {
        "type": "text",
        "value": "The data engineers must be able to commit changes to source control in WorkspaceA."
      },
      {
        "type": "text",
        "value": "You need to schedule the population of the medallion layers to meet the technical requirements."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Schedule a data pipeline that calls other data pipelines.",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "Schedule a notebook.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Schedule an Apache Spark job.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Schedule multiple data pipelines.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "maxSelect": 1
  },
  {
    "id": 112,
    "title": "Question 112",
    "text": "DRAG DROP -\nYou have a Fabric eventhouse that contains a KQL database. The database contains a table named TaxiData. The following is a sample of the data in TaxiData.\nYou need to build two KQL queries. The solution must meet the following requirements:\nOne of the queries must partition RunningTotalAmount by VendorID.\nThe other query must create a column named FirstPickupDateTime that shows the first value of each hour from tpep_pickup_datetime partitioned by payment_type.\nHow should you complete each query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "elements": [
      {
        "type": "text",
        "value": "DRAG DROP -"
      },
      {
        "type": "text",
        "value": "You have a Fabric eventhouse that contains a KQL database. The database contains a table named TaxiData. The following is a sample of the data in TaxiData."
      },
      {
        "type": "image",
        "value": "images/image90.png"
      },
      {
        "type": "text",
        "value": "You need to build two KQL queries. The solution must meet the following requirements:"
      },
      {
        "type": "text",
        "value": "One of the queries must partition RunningTotalAmount by VendorID."
      },
      {
        "type": "text",
        "value": "The other query must create a column named FirstPickupDateTime that shows the first value of each hour from tpep_pickup_datetime partitioned by payment_type."
      },
      {
        "type": "text",
        "value": "How should you complete each query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "image",
        "value": "images/image91.png"
      }
    ],
    "options": [],
    "images": [
      "images/image90.png",
      "images/image91.png"
    ],
    "answer_images": [
      "images/image92.png"
    ],
    "notes": [],
    "interactive": {
      "type": "dropdown_matching",
      "rows": [
        {
          "id": "r1",
          "label": "Statement 1 (RunningTotalAmount partitioned by VendorID)",
          "options": [
            "Row_cumsum",
            "Row_rank_dense",
            "Row_rank_min",
            "Row_window_session"
          ],
          "correct": "Row_cumsum"
        },
        {
          "id": "r2",
          "label": "Statement 2 (FirstPickupDateTime partitioned by payment_type)",
          "options": [
            "Row_window_session",
            "Row_cumsum",
            "Row_rank_dense",
            "Row_rank_min"
          ],
          "correct": "Row_window_session"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 113,
    "title": "Question 113",
    "text": "HOTSPOT -\nYou are processing streaming data from an external data provider.\nYou have the following code segment.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nNO, YES, YES\nFirst row will be Washington, Contoso, 400\nFabrikam in Seattle will have 2 because row_rank_dense allows ties\nYes, in both cases it will be 1",
    "elements": [
      {
        "type": "text",
        "value": "HOTSPOT -"
      },
      {
        "type": "text",
        "value": "You are processing streaming data from an external data provider."
      },
      {
        "type": "text",
        "value": "You have the following code segment."
      },
      {
        "type": "image",
        "value": "images/image93.png"
      },
      {
        "type": "text",
        "value": "For each of the following statements, select Yes if the statement is true. Otherwise, select No."
      },
      {
        "type": "text",
        "value": "NOTE: Each correct selection is worth one point."
      },
      {
        "type": "text",
        "value": "NO, YES, YES"
      },
      {
        "type": "text",
        "value": "First row will be Washington, Contoso, 400"
      },
      {
        "type": "text",
        "value": "Fabrikam in Seattle will have 2 because row_rank_dense allows ties"
      },
      {
        "type": "text",
        "value": "Yes, in both cases it will be 1"
      }
    ],
    "options": [],
    "images": [
      "images/image93.png"
    ],
    "answer_images": [
      "images/image94.png"
    ],
    "notes": [],
    "interactive": {
      "type": "yes_no",
      "rows": [
        {
          "id": "r1",
          "label": "Litware from New York will be displayed at the top of the result set.",
          "correct": "No"
        },
        {
          "id": "r2",
          "label": "Fabrikam in Seattle will have value = 2 in the Rank column.",
          "correct": "Yes"
        },
        {
          "id": "r3",
          "label": "Litware in San Francisco will have the same value in the Rank column as Litware in New York.",
          "correct": "Yes"
        }
      ]
    },
    "maxSelect": 1
  },
  {
    "id": 114,
    "title": "Question 114",
    "text": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a Delta table named Table1.\nYou analyze Table1 and discover that Table1 contains 2,000 Parquet files of 1 MB each.\nYou need to minimize how long it takes to query Table1.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a Delta table named Table1."
      },
      {
        "type": "text",
        "value": "You analyze Table1 and discover that Table1 contains 2,000 Parquet files of 1 MB each."
      },
      {
        "type": "text",
        "value": "You need to minimize how long it takes to query Table1."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Disable V-Order and run the OPTIMIZE command.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Disable V-Order and run the VACUUM command.",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "Run the OPTIMIZE and VACUUM commands.",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Delta Small File Problem (OPTIMIZE + VACUUM).\n• Phân tích đáp án đúng (C - Run the OPTIMIZE and VACUUM commands):\n  - Khi bảng chứa 2,000 file Parquet nhỏ (1MB/file), chạy `OPTIMIZE` để gom file nhỏ thành file lớn và chạy `VACUUM` để dọn dẹp file cũ là phương án tối ưu tốc độ truy vấn tốt nhất.",
    "maxSelect": 1
  },
  {
    "id": 115,
    "title": "Question 115",
    "text": "You have a Fabric workspace that contains a warehouse named Warehouse1. Data is loaded daily into Warehouse1 by using data pipelines and stored procedures.\nYou discover that the daily data load takes longer than expected.\nYou need to monitor Warehouse1 to identify the names of users that are actively running queries.\nWhich view should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains a warehouse named Warehouse1. Data is loaded daily into Warehouse1 by using data pipelines and stored procedures."
      },
      {
        "type": "text",
        "value": "You discover that the daily data load takes longer than expected."
      },
      {
        "type": "text",
        "value": "You need to monitor Warehouse1 to identify the names of users that are actively running queries."
      },
      {
        "type": "text",
        "value": "Which view should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "sys.dm_exec_connections",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "sys.dm_exec_requests",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "queryinsights.long_running_queries",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "queryinsights.frequently_run_queries",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "sys.dm_exec_sessions",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Monitoring Active Warehouse Sessions.\n• Phân tích đáp án đúng (E - sys.dm_exec_sessions):\n  - Dynamic Management View `sys.dm_exec_sessions` hiển thị thông tin các phiên làm việc đang hoạt động, bao gồm tên người dùng (`login_name`) đang gửi truy vấn.",
    "maxSelect": 1
  },
  {
    "id": 116,
    "title": "Question 116",
    "text": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table in a lakehouse.\nYou need to remove files that are older than seven days and are no longer in use.\nWhich command should you run?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table in a lakehouse."
      },
      {
        "type": "text",
        "value": "You need to remove files that are older than seven days and are no longer in use."
      },
      {
        "type": "text",
        "value": "Which command should you run?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "VACUUM",
        "isCorrect": true
      },
      {
        "letter": "B",
        "text": "COMPUTE",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "OPTIMIZE",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "CLONE",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Removing Old Unused Files.\n• Phân tích đáp án đúng (A - VACUUM):\n  - Lệnh `VACUUM` xóa các file dữ liệu cũ vượt quá thời hạn lưu trữ (retention period - mặc định 7 ngày) không còn được sử dụng.",
    "maxSelect": 1
  },
  {
    "id": 117,
    "title": "Question 117",
    "text": "You have a Fabric warehouse named DW1 that loads data by using a data pipeline named Pipeline1. Pipeline1 uses a Copy data activity with a dynamic SQL source. Pipeline1 is scheduled to run every 15 minutes.\nYou discover that Pipeline1 keeps failing.\nYou need to identify which SQL query was executed when the pipeline failed.\nWhat should you do?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric warehouse named DW1 that loads data by using a data pipeline named Pipeline1. Pipeline1 uses a Copy data activity with a dynamic SQL source. Pipeline1 is scheduled to run every 15 minutes."
      },
      {
        "type": "text",
        "value": "You discover that Pipeline1 keeps failing."
      },
      {
        "type": "text",
        "value": "You need to identify which SQL query was executed when the pipeline failed."
      },
      {
        "type": "text",
        "value": "What should you do?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "From Monitoring hub, select the latest failed run of Pipeline1, and then view the output JSON.",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "From Monitoring hub, select the latest failed run of Pipeline1, and then view the input JSON.",
        "isCorrect": true
      },
      {
        "letter": "C",
        "text": "From Real-time hub, select Fabric events, and then review the details of Microsoft.Fabric.ItemReadFailed.",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "From Real-time hub, select Fabric events, and then review the details of Microsoft. Fabric.ItemUpdateFailed.",
        "isCorrect": false
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Debugging Pipeline Copy Activity (Input JSON).\n• Phân tích đáp án đúng (B - view the input JSON):\n  - Trong Monitoring Hub, xem **Input JSON** của Copy Activity cho phép bạn xem chính xác câu lệnh SQL động được truyền vào và thực thi khi pipeline bị lỗi.",
    "maxSelect": 1
  },
  {
    "id": 118,
    "title": "Question 118",
    "text": "You have a Fabric notebook named Notebook1 that has been executing successfully for the last week.\nDuring the last run, Notebook1executed nine jobs.\nYou need to view the jobs in a timeline chart.\nWhat should you use?",
    "elements": [
      {
        "type": "text",
        "value": "You have a Fabric notebook named Notebook1 that has been executing successfully for the last week."
      },
      {
        "type": "text",
        "value": "During the last run, Notebook1executed nine jobs."
      },
      {
        "type": "text",
        "value": "You need to view the jobs in a timeline chart."
      },
      {
        "type": "text",
        "value": "What should you use?"
      }
    ],
    "options": [
      {
        "letter": "A",
        "text": "Real-Time hub",
        "isCorrect": false
      },
      {
        "letter": "B",
        "text": "Monitoring hub",
        "isCorrect": false
      },
      {
        "letter": "C",
        "text": "the job history from the application run",
        "isCorrect": false
      },
      {
        "letter": "D",
        "text": "Spark History Server",
        "isCorrect": false
      },
      {
        "letter": "E",
        "text": "the run series from the details of the application run",
        "isCorrect": true
      }
    ],
    "images": [],
    "answer_images": [],
    "notes": [],
    "explanation": "• Khái niệm: Spark Application Run Details (Run Series).\n• Phân tích đáp án đúng (E - the run series from the details of the application run):\n  - Trang chi tiết chạy ứng dụng Spark trong Fabric (Application Run Details) cung cấp biểu đồ mốc thời gian (*Run Series / Timeline Chart*) trực quan cho từng job trong Notebook.",
    "maxSelect": 1
  }
];