import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface GenericNode {
  display: string;
  children?: GenericNode[];
}

const TREE_DATA: GenericNode[] = [
  {
    display: 'Strengths:',
    children: [
      { display: 'Excellent verbal and written communication skills' },
      { display: 'Organized and able to handle multiple tasks' },
      { display: "Able to manage multiple teams and team environment's" },
      { display: 'Steady and fast paced, strong work ethics' },
      { display: 'Exceptional problem solving skills' },
      { display: 'Trainer, Educator' },
      { display: 'Development life Cycle Knowledge' },
      { display: 'Agile Methodology, SCRUM' },
      { display: 'Solution, Product, Customer and User Centric' },
    ],
  },
  {
    display: 'Programming Languages:',
    children: [
      {
        display: 'C#',
        children: [
          { display: '.NET Framework 2+' },
          { display: '.NET Core' },
          { display: '.NET 5+' },
          { display: 'Entity Framework Core' },
          { display: 'Entity Framework 5+' },
        ],
      },
      { display: 'Typescript' },
      { display: 'Javascript' },
      {
        display: 'CSS',
        children: [
          { display: 'SCSS' },
          { display: 'Twitter Bootstrap' },
        ]
      },
      { display: 'HTML5' },
      { display: 'SQL' },
      { display: 'Java (Android)' },
      { display: 'Swift (iOS)' },
      { display: 'XML' },
      { display: 'JSON' },
    ],
  },
  {
    display: 'Proficient user of:',
    children: [
      { display: 'Visual Studio Code and Visual Studio' },
      { display: 'Azure and Azure DevOps' },
      { display: 'CI/CD Pipelines' },
      { display: 'CLI and CLT, Powershell, Bash' },
      {
        display: 'Windows, Mac, Linux',
        children: [
          { display: 'Serverless architecture' },
          { display: 'IIS' },
        ]
      },
      { display: 'Git' },
      {
        display: 'Angular 2+',
        children: [
          { display: 'Angular Material' },
          { display: 'NGX-Formly' },
        ]
      },
      {
        display: 'Web API',
        children: [
          { display: 'REST' },
          { display: 'SOAP' },
          { display: 'Swagger' },
          { display: 'Nswag' },
          { display: 'Open API' },
          { display: 'WCF' },
          { display: 'HTTP 1 and 2 protocols' },
        ]
      },
      { display: 'MongoDB' },
      { display: 'jQuery' },
      { display: 'Selenium IDE' },
      { display: 'Atlassian Suite of products' }
    ]
  },
  {
    display: 'Education:',
    children: [
      {
        display: 'The College of Westchester, White Plains NY - 2004-2005',
        children: [{ display: 'Associate in Applied Science Major: Multimedia Development and Design' }]
      }
    ]
  },
  {
    display: 'Experience:',
    children: [
      {
        display: 'EMS Linq Inc | Scottsdale, AZ | Nov 2019 | Current',
        children: [
          { display: 'Language Focus:', children: [{ display: 'C# .Net Core 6+, MSSQL, Angular 12, EF Core' }] },
          { display: 'Engineering Manager | Mar 2021 | Current' },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Lead several teams of Junior, Senior, Principal Engineers and Contractors' },
              { display: 'Couch standards, principals, patterns, integrated systems and workflow processes (agile) in line with business strategic goals' },
              { display: 'Documentation and training videos' },
              { display: 'Time management and reporting' },
              { display: 'Interviews, Performance reviews, 1on1s, and interventions (PIP)' },
              { display: 'Researched, introduced and implemented new technologies for better maintenance, performance and quality' },
              { display: 'Enforced unit, integration, regression/e2e testing, recorded video demonstrations, PR templates' },
              { display: 'Regular meetings including architecture, manager, DISC, documents gathering, R&D, scrum ceremonies' },
              { display: 'Maintain Saas products to over 3600 districts and 15m students' },
            ]
          },
          { display: 'Senior Software Engineer | Nov 2019 | Mar 2021' },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Implement specifications from business rules documentation' },
              {
                display: 'Introduced and implemented:',
                children: [
                  { display: 'SPA (Vue, Angular)' },
                  { display: 'Swagger and NSwag' },
                  { display: 'Docker' },
                  { display: 'Unit, Integration and e2e tests' },
                ]
              },
              { display: 'Documentation' },
              { display: 'Implement specifications from business rules documentation' }
            ]
          },
        ]
      },

      {
        display: 'Transaction Warehouse Inc | Chandler, AZ | Mar 2019 | Nov 2019',
        children: [
          { display: 'Software Engineer (Contract)' },
          { display: 'Language Focus:', children: [{ display: 'C# .NET Framework 4.8, ASP.NET, MVC 5, MSSQL, Javascript – jQuery, WCF' }] },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Maintenance on existing business application framework including unit tests' },
              { display: 'Framework dependency upgrades (.Net Framework 2x to 4.8) a move towards .Net Standard' },
              { display: 'Azure App Services and CI/CD Implementation' },
              { display: 'Azure Table Storage Implementation' },
              { display: 'Application Insights Implementation' },
              { display: 'Developed Azure Function for web hooks' },
              { display: 'Updated WCF services for loosely coupled architecture' },
              { display: 'Utilized Windows Services for micro-services' },
              { display: 'Updated MVC Payment Portal' },
              { display: 'Assembled Internal Tools using Blazor and Angular 6' },
              { display: 'Twilio, SendGrid and IVR for email, phone and SMS' },
            ]
          },
        ]
      },

      {
        display: 'Magellan Health Services | Scottsdale, AZ | Sep 2013 | Sep 2018',
        children: [
          { display: 'Senior Web Application Developer' },
          {
            display: 'Language Focus:',
            children: [
              { display: 'C# .NET Framework 4.0+, .Net Core 0.9+, MVC 3+' },
              { display: 'Swift 2+, iOS 9+' },
              { display: 'Java 6+, Android 4+' },
              { display: 'MSSQL, SqLite, MongoDB' },
              { display: 'Angular 2.0+, TypeScript, Javascript, jQuery, CSS, SCSS, Nodejs' },
            ]
          },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Developed solutions for business needs' },
              { display: 'Acted as technical consultant on many projects (FTP, Microsoft CMS, API integration, website design, and other technical needs)' },
              { display: 'Maintained and customized company website via Umbraco' },
              { display: 'Edited content and maintained visual standards versioned under TFS' },
              { display: 'Wrote TSQL - Dynamic SQL for reporting purposes' },
              { display: 'Integrated custom interfaces for mobile and desktop' },
              { display: 'Maintained marketing websites' },
              { display: 'HITECH and HIPAA Certified' },
            ]
          },
        ]
      },
      {
        display: 'State of Arizona, DES - DDD | Phoenix, AZ | June 2013 | Sep 2013',
        children: [
          { display: 'Software Developer - Contractor' },
          {
            display: 'Language Focus:',
            children: [{ display: 'C# .NET Framework 4.0, ASP.NET, MVC 4, MSSQL 2008r2, Javascript, jQuery, WCF' }]
          },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Implemented N-Tier Architecture' },
              { display: 'Developed MVC and WCF for required specification' },
              { display: 'Developed case management software' },
              { display: 'Wrote Stored Procedures and SQL scripts' },
              { display: 'SQL Reporting' },
              { display: 'Documentation' },
              { display: 'HITECH and HIPAA Certified' },
            ]
          },
        ]
      },

      {
        display: '360 Cloud Solutions | Scottsdale AZ | Aug 2012 | June 2013',
        children: [
          { display: 'Software Developer' },
          {
            display: 'Language Focus:',
            children: [{ display: 'Javascript, jQuery, HTML, JSON, C# and XML' }]
          },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Implementation of NetSuite' },
              { display: 'NetSuite Customization' },
              { display: 'Developed a NetSuite Javascript Framework used throughout the company' },
              { display: 'Consultant and provided technical solutions for system migrations and integration' },
              { display: 'SuiteApp builds; bundled sets of scripts, records, and settings; built saleable products' },
              { display: 'C# ASP.NET Web Services (Soap) - CSV Import' },
              { display: 'Documentation' },
            ]
          },
        ]
      },
      {
        display: 'Sepio Networks | Chandler AZ | Jan 2012 | Oct 2012',
        children: [
          { display: 'Web Developer' },
          { display: 'Language Focus:', children: [{ display: 'C# .NET Framework 4.0, ASP.NET MVC 3, ObjectiveC, MSSQL 2008r2, RavenDB, Javascript, jQuery' }] },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Developed solutions for home based clinician' },
              { display: 'Maintained iPad application used by clinicians' },
              { display: 'Developed, tested, and deployed scalable Web API' },
              { display: 'Development of new applications for back office functionality' },
              { display: 'Provided application and database support for client/server and Internet/Intranet applications' },
              { display: 'Analyzed and solved application and database related issues' },
              { display: 'Monitored, managed, and maintained application servers and databases for efficient and effective operation' },
              { display: 'Replaced SQL database for RavenDB “No-SQL” database introducing high performance, reliability, scalability, and secure, for the propose of storing healthcare documents' },
              { display: 'Worked with WCF, Entity Framework 4' },
            ]
          },
        ]
      },
      {
        display: "Jay's Web Dev LLC | Tempe AZ | Jan 2009 | Dec 2012",
        children: [
          { display: 'Freelance Web Developer' },
          { display: 'Language Focus:', children: [{ display: 'C# .NET, PHP, MySQL, Javascript, jQuery, ActionScript 3.0' }] },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Consulted with clients for discovery' },
              { display: 'Prepared project plans and time estimates' },
              { display: 'Produced solutions for websites and desktop applications' },
              { display: 'Designed, Developed, Tested, and deployed web applications and Web API' },
              { display: 'Pay-Pal integration' },
              { display: 'Live Chat using Flash AS3, RTMP(E) protocols, and Flash Media Server (FMS)' },
              { display: 'Flash development (Ads in SWF)' },
              { display: 'Data exchange with Microsoft POS' },
              { display: 'PDF and image processing automation' },
              { display: 'Google integration' },
            ]
          },
        ]
      },
      {
        display: "Educational Sales Co. | Tempe AZ | Jan 2012 | Sep 2014",
        children: [
          { display: 'Software Engineer' },
          { display: 'Language Focus:', children: [{ display: 'C# .NET Framework 3.5 - 4.0, ASP.NET MVC3-4, MSSQL, Javascript, jQuery, jQuery Mobile, PHP, MySQL, ActionScript 3.0, CSS3, HTML4, HTML5' }] },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Prepared project plans and time estimates' },
              { display: 'Developed, tested, and deployed scalable rich multi-tenant web applications used by 50,000+ online customers' },
              { display: 'Back office web portal (ERP)' },
              { display: 'Lead a team in significant enhancements from non OOP apps to full OOP apps' },
              { display: 'Enhanced pick-packing-shipping process from 10 minutes per order to 2 minutes and from 200 orders per day to 1200' },
              { display: 'Consulted and evaluated design patterns, use cases, practical applications in a team atmosphere' },
              { display: 'Architect and wrote PHP MVC library' },
              { display: 'Help desk - Live chat utilized RTMP(E) Flash and Flash Media server' },
              { display: 'Developed online e-commerce direct to warehouse inventory systems software' },
              { display: 'Wrote multiple public Web API REST using XML and later JSON' },
              {
                display: 'Consumed multiple Web API XML using multi-threading delegates',
                children: [
                  { display: 'Endicia, UPS, Amazon, Authorize.net, PayPal, and other Web Service API integration' }
                ]
              },
            ]
          },
        ]
      },
      {
        display: 'Diana Gould, LTD | Elmsford NY | May 2006 | Aug 2006',
        children: [
          { display: 'Graphic Designer' },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Designed, recreated, and super imposed images for themed parties' },
              { display: 'High resolution wide format printing' },
              { display: 'Custom PHP scripts for merging and overlaying images' },
              { display: 'Maintained computer scheme for networked computers' },
              { display: 'Enhanced performance on all systems (hardware and software)' },
            ]
          }
        ]
      },
      {
        display: "The Children's Village | Yonkers NY | Sep 2005 | Jan 2006",
        children: [
          { display: 'Graphic and Web Design Instructor' },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Instructed students on the inner workings of Dreamweaver and Photoshop CS' },
              { display: 'Designed and wrote syllabus' },
              { display: 'Coached layout and conceptual design, fundamentals of web standards' },
              { display: 'Prepared class and homework assignments, quizzes and tests, lectures and hands on assignments' },
              { display: 'Reviewed and graded class and homework assignments' },
            ]
          }
        ]
      },
      {
        display: "C2C IT, LLC | Yonkers NY | Mar 2002 | Oct 2004",
        children: [
          { display: 'Graphic and Web Designer' },
          { display: 'Language Focus:', children: [{ display: 'PHP, MySQL, Javascript, Flash 2.0, CSS, HTML4' }] },
          {
            display: 'Responsibilities:',
            children: [
              { display: 'Designed and developed company and client websites' },
              { display: 'Adhere to strict requirements' },
              { display: 'Designed Flash ads' },
              { display: 'Developed MySQL and PHP Scripts for a support ticket system' },
            ]
          }
        ]
      }
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private _transformer = (node: GenericNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.display,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.treeControl.expand(this.treeControl.dataNodes.find((n) => n.name == 'Experience:'))
    this.treeControl.expand(this.treeControl.dataNodes.find((n) => n.name == 'EMS Linq Inc | Scottsdale, AZ | Nov 2019 | Current'))
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
