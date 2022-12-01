import React from 'react'
import axios from 'axios'

const Subscription = () => {
    const ceckout = async() => {
        // const res = await axios.post('http://localhost:3001/api/payment/add-plan' , {
        //   name: "leadheroes 3 month plan",
        //   interval_count:3,
        //   price: 500
        // })
        //const res = await axios.get('http://localhost:3001/api/payment/get-all-planes')
        
        // const res = await axios.post('http://050d-197-160-28-39.ngrok.io/api/payment/create-webhook' , {} , {
        //   withCredentials: true
        // })
    
        const res = await axios.post("http://localhost:3001/api/payment/subscription-session" , {
            //planId: "plan_L9LIU77hS9h5Q2"
            //planId: "plan_L9NnpxZXTUb6a5"
            //planId: "price_1KUYAsG2xjFl1tGk4cBFRqbg"
            planId: "price_1KW0wHG2xjFl1tGkGkNEle9N"
    
          } , { headers: {
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0IHVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY0NTQ1Nzc0OSwiZXhwIjoxNjQ1NjMwNTQ5fQ.8p1OLk9UJ39nr9AYcYDTwY-kkSEKJst3wR8pu8Lge70'
        }})
        window.open(res.data.url)
        console.log(res)
      }
    
      const unsubscription = async () => {
        const res = await axios.delete("http://localhost:3001/api/payment/subscription?refund=true" , { headers: {
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0IHVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY0NTQ1Nzc0OSwiZXhwIjoxNjQ1NjMwNTQ5fQ.8p1OLk9UJ39nr9AYcYDTwY-kkSEKJst3wR8pu8Lge70'
        }})
        console.log(res)
    
      }
    
      const update = async () => {
        const res = await axios.patch("http://localhost:3001/api/payment/subscription" , {
          //plan: "plan_L9LIU77hS9h5Q2"
          plan: "plan_L9NnpxZXTUb6a5"
          //plan: "price_1KUYAsG2xjFl1tGk4cBFRqbg"
        } , { headers: {
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0IHVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY0NTQ1Nzc0OSwiZXhwIjoxNjQ1NjMwNTQ5fQ.8p1OLk9UJ39nr9AYcYDTwY-kkSEKJst3wR8pu8Lge70'
        }})
        console.log(res)
        const date = new Date(res.data.current_period_end / 1000)
        console.log(`${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`)
        //console.log(`${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`)
      }
    
      const autorenew = async () => {
        const res = await axios.post("http://localhost:3001/api/payment/autorenew" , {} , { headers: {
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0IHVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY0NTQ1Nzc0OSwiZXhwIjoxNjQ1NjMwNTQ5fQ.8p1OLk9UJ39nr9AYcYDTwY-kkSEKJst3wR8pu8Lge70'
        }})
        console.log(res)
      }
    
      const unsubscriptionRefund = async () => {
        const res = await axios.post("http://localhost:3001/api/payment/unsubscription-refund" , {} , { headers: {
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0IHVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY0NTQ1Nzc0OSwiZXhwIjoxNjQ1NjMwNTQ5fQ.8p1OLk9UJ39nr9AYcYDTwY-kkSEKJst3wR8pu8Lge70'
        }})
        console.log(res)
      }
    
      const getPlanById = async () => {
        const res = await axios.get("http://localhost:3001/api/payment/get-plan/plan_L9NnpxZXTUb6a5" ,)
        console.log(res)
      }
  return (
    <div>
         <button onClick = {ceckout}>checkout session</button>
      <button onClick = {unsubscription}>unsubscription</button>
      <button onClick = {unsubscriptionRefund}>unsubscription with Refund</button>
      <button onClick = {update}>update subscription</button>
      <button onClick = {autorenew}>autorenew</button>
      <button onClick = {getPlanById}>get plan</button>
    </div>
  )
}

export default Subscription