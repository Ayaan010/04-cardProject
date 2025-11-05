// import { Bookmark } from 'lucide-react'
import Card from './component/card.jsx'
// import User from './component/User.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UX Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Pune, India"
  }
];

// console.log(jobOpenings);

  return (
    <div className='parent'>

       {
        jobOpenings.map(function(elem,index){
          
          return <Card logo={elem.brandLogo} company={elem.companyName} postedOn={elem.datePosted} loc={elem.location} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} /> 
        })
       }
   
  

    </div>
  )
}

export default App
