import React from 'react'
import './HomeMainbar.css'
import {Link ,useLocation} from 'react-router-dom'
import QuestionsList from '../HomeMainbar/QuestionList'
const HomeMainbar = () => {
   var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]
    const location =useLocation()
  return (
  <div className="main-bar">
    <div className="main-bar-header">
      {
 location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
      }
         <Link to ='./AskQuestions'  className='ask-btn'>Ask Question</Link>
         <div>
            {
                questionsList === null ?
                <h1>Loading...</h1>:
                <>
                <p>{questionsList.length} questions</p>
                <QuestionsList questionsList={questionsList} />
                
                    
                
                
                </>
            }
         </div>
    </div>
  </div>
  )
    }

export default HomeMainbar