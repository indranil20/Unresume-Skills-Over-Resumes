/* Central data store — all mock data for the app */

function getJobs() {
  return [
    { id:1, title:'Frontend Developer', company:'TechCorp', logo:'🏢', category:'Engineering', skills:['React','TypeScript','CSS','Node.js'], hasTask:true, taskId:1, featured:true, description:'Build responsive, accessible UIs for our SaaS platform. You will work with our design system and own frontend features end-to-end.', requirements:['3+ years React experience','TypeScript proficiency','Experience with design systems','Understanding of web performance'] },
    { id:2, title:'UI/UX Designer', company:'DesignStudio', logo:'🎨', category:'Design', skills:['Figma','UI/UX','Prototyping','User Research'], hasTask:true, taskId:2, featured:false, description:'Design beautiful, user-centric interfaces for our product suite. You will run user research and translate insights into clean designs.', requirements:['Strong Figma skills','Portfolio of shipped products','Experience with design systems','Basic understanding of HTML/CSS'] },
    { id:3, title:'Data Scientist', company:'DataFlow', logo:'📊', category:'Data', skills:['Python','Machine Learning','SQL','Pandas'], hasTask:true, taskId:3, featured:true, description:'Build ML models and data pipelines to power our analytics platform. Work with large datasets and present insights to stakeholders.', requirements:['Python proficiency','ML model development','SQL expertise','Statistical analysis background'] },
    { id:4, title:'Backend Engineer', company:'CloudSystems', logo:'☁️', category:'Engineering', skills:['Node.js','PostgreSQL','AWS','Docker'], hasTask:false, featured:false, description:'Design and build scalable backend services for our cloud infrastructure. Own microservices and API development.', requirements:['4+ years backend experience','PostgreSQL expertise','AWS services knowledge','REST API design'] },
    { id:5, title:'Product Manager', company:'StartupX', logo:'🚀', category:'Product', skills:['Product Strategy','Roadmapping','Analytics','Agile'], hasTask:false, featured:false, description:'Drive product vision and execution for our core platform. Work cross-functionally with engineering, design, and business teams.', requirements:['3+ years PM experience','Data-driven decision making','Strong communication skills','Technical background preferred'] },
    { id:6, title:'Flutter Developer', company:'MobileFirst', logo:'📱', category:'Engineering', skills:['Flutter','Dart','Firebase','Mobile UI'], hasTask:true, taskId:1, featured:false, description:'Build high-quality cross-platform mobile applications. Own the full mobile feature lifecycle from design to delivery.', requirements:['Flutter/Dart expertise','Published apps in stores','Firebase experience','UI/UX sensibility'] },
  ];
}

function getTasks() {
  return [
    { id:1, jobId:1, title:'React Dashboard Challenge', isJobLinked:true, brief:'Build a responsive analytics dashboard component using React and TypeScript. The dashboard should display mock data (provided), include filtering, and be fully accessible. Focus on clean code, performance, and good UX.', timeLimit:'48h', submissionsCount:142, reviewedCount:89, requirements:['Use React 18 + TypeScript','Responsive for mobile and desktop','Include at least 3 chart types','WCAG 2.1 AA accessibility'], rubric:[{criterion:'Code Quality',points:25},{criterion:'UI/UX Design',points:25},{criterion:'Functionality',points:30},{criterion:'Accessibility',points:20}] },
    { id:2, jobId:2, title:'Mobile App Redesign', isJobLinked:true, brief:'Redesign the onboarding flow for a fintech mobile app. You have been given the existing screens (low-res screenshots). Create a fresh, modern redesign in Figma that improves the user experience while keeping the core functionality.', timeLimit:'72h', submissionsCount:87, reviewedCount:52, requirements:['Deliver Figma file with all screens','Include a brief design rationale','Maintain brand color guidelines','Design for iOS and Android'], rubric:[{criterion:'Visual Design',points:30},{criterion:'UX Flow',points:30},{criterion:'Attention to Detail',points:20},{criterion:'Rationale',points:20}] },
    { id:3, jobId:3, title:'Customer Churn Prediction', isJobLinked:true, brief:'Given a dataset of 10,000 customers (provided as CSV), build a churn prediction model. Your final output should be a Python notebook with your analysis, model training, evaluation metrics, and insights.', timeLimit:'1 week', submissionsCount:63, reviewedCount:41, requirements:['Python notebook with clear explanations','Min 80% accuracy on test set','Include feature importance analysis','Visualize key insights'], rubric:[{criterion:'Model Performance',points:35},{criterion:'Code Clarity',points:25},{criterion:'Insights Quality',points:25},{criterion:'Visualizations',points:15}] },
    { id:4, isJobLinked:false, title:'CSS Layout Challenge', brief:'Recreate a given layout pixel-perfectly using only HTML and CSS. No frameworks.', timeLimit:'24h', submissionsCount:234, reviewedCount:190, requirements:['Pure HTML + CSS only','Responsive design','Cross-browser compatible'], rubric:[{criterion:'Accuracy',points:40},{criterion:'Code Quality',points:30},{criterion:'Responsiveness',points:30}] },
    { id:5, isJobLinked:false, title:'Python Algorithm Challenge', brief:'Solve 3 algorithmic problems in Python. Optimize for time and space complexity.', timeLimit:'3h', submissionsCount:312, reviewedCount:280, requirements:['Python 3.9+','Include time complexity analysis','Clean, readable code'], rubric:[{criterion:'Correctness',points:50},{criterion:'Efficiency',points:30},{criterion:'Code Style',points:20}] },
  ];
}

function getCandidates() {
  return [
    { username:'jay-dev', name:'Jay Desai', score:847, rank:1, badge:'Diamond', skills:['React','TypeScript','Node.js','UI/UX'], tasksCompleted:12, followers:234, following:89, portfolio:[{id:1,title:'E-Commerce Dashboard',type:'task',isPublic:true,previewType:'image',score:91},{id:2,title:'React Portfolio Site',type:'external',isPublic:true,previewType:'website'},{id:3,title:'Python Data Analysis',type:'task',isPublic:false,previewType:'document',score:84}] },
    { username:'priya-designs', name:'Priya Sharma', score:812, rank:2, badge:'Diamond', skills:['Figma','UI/UX','Prototyping','CSS'], tasksCompleted:9, followers:189, following:67, portfolio:[{id:4,title:'FinTech App Redesign',type:'task',isPublic:true,previewType:'image',score:88},{id:5,title:'Brand Identity System',type:'external',isPublic:true,previewType:'image'}] },
    { username:'arjun-ml', name:'Arjun Kumar', score:779, rank:3, badge:'Gold', skills:['Python','Machine Learning','SQL','TensorFlow'], tasksCompleted:15, followers:156, following:42, portfolio:[{id:6,title:'Churn Prediction Model',type:'task',isPublic:true,previewType:'document',score:79}] },
    { username:'sara-product', name:'Sara Ali', score:751, rank:4, badge:'Gold', skills:['Product Strategy','Analytics','Figma','Agile'], tasksCompleted:7, followers:98, following:54, portfolio:[{id:7,title:'SaaS Onboarding Flow',type:'task',isPublic:true,previewType:'image',score:83}] },
    { username:'rahul-dev', name:'Rahul Mehta', score:723, rank:5, badge:'Silver', skills:['Flutter','Dart','Firebase','Mobile UI'], tasksCompleted:11, followers:112, following:38, portfolio:[{id:8,title:'Fitness Tracker App',type:'task',isPublic:true,previewType:'image',score:76}] },
    { username:'neha-data', name:'Neha Patel', score:698, rank:6, badge:'Silver', skills:['Python','Data Science','PostgreSQL','Tableau'], tasksCompleted:8, followers:87, following:29, portfolio:[{id:9,title:'Sales Analytics Dashboard',type:'task',isPublic:true,previewType:'image',score:72}] },
  ];
}

function getConversations() {
  return [
    { id:1, withName:'Emily Ross', role:'HR · TechCorp', avatarBg:'linear-gradient(135deg,#00c4ff,#5b6cf5)', unread:1, messages:[
      {id:1,from:'them',text:'Hi Jay! I reviewed your React dashboard submission — impressive work.',time:'2d ago'},
      {id:2,from:'me',text:'Thank you! I put a lot of effort into the accessibility aspects.',time:'2d ago'},
      {id:3,from:'them',text:'It really shows. I\'d love to set up a quick call to discuss next steps.',time:'1d ago'},
    ]},
    { id:2, withName:'Mark Wilson', role:'Interviewer · DesignStudio', avatarBg:'linear-gradient(135deg,#8040d8,#5b6cf5)', unread:0, messages:[
      {id:1,from:'them',text:'Your score on the UI/UX task was 88/100 — well done.',time:'3d ago'},
      {id:2,from:'me',text:'Thanks for the feedback! Any areas I could improve?',time:'3d ago'},
      {id:3,from:'them',text:'The interaction design was strong. Work on the design rationale documentation.',time:'3d ago'},
    ]},
    { id:3, withName:'Priya Sharma', role:'Candidate · Rank #2', avatarBg:'linear-gradient(135deg,#5b6cf5,#8040d8)', unread:2, messages:[
      {id:1,from:'them',text:'Hey! I saw your dashboard submission. How did you handle the data viz?',time:'5h ago'},
      {id:2,from:'me',text:'Used Recharts with a custom theme. Happy to share the approach!',time:'4h ago'},
      {id:3,from:'them',text:'That would be amazing. Would love to collaborate on something.',time:'1h ago'},
    ]},
  ];
}

function getFeed() {
  return [
    { id:1, type:'submission', actorName:'Priya Sharma', actorUsername:'priya-designs', action:'submitted', target:'Mobile App Redesign task', time:'2h ago' },
    { id:2, type:'score', actorName:'Arjun Kumar', actorUsername:'arjun-ml', action:'scored', target:'91/100 on React Dashboard', score:91, time:'4h ago' },
    { id:3, type:'follow', actorName:'Sara Ali', actorUsername:'sara-product', action:'started following you', time:'6h ago' },
    { id:4, type:'badge', actorName:'Rahul Mehta', actorUsername:'rahul-dev', action:'earned the', target:'Gold Badge', time:'1d ago' },
    { id:5, type:'job', actorName:'Jay Desai', actorUsername:'jay-dev', action:'applied to', target:'Frontend Developer at TechCorp', time:'1d ago' },
    { id:6, type:'submission', actorName:'Neha Patel', actorUsername:'neha-data', action:'submitted', target:'Customer Churn Prediction task', time:'2d ago' },
  ];
}
