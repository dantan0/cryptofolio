import react from 'react';

const transactions = [
  {
     "type" : "send",
     "details" : {
        "subtitle" : "From Kevin Liang",
        "health" : "positive",
        "header" : "Received 0.00066265 BTC ($49.97)",
        "title" : "Received Bitcoin"
     },
     "off_chain_status" : "completed",
     "resource_path" : "/v2/accounts/063d32b5-3ea0-58fd-a3d6-e40bfefeee1c/transactions/f52fec7c-62a4-5d8e-ae48-6984f1d4cf57",
     "description" : null,
     "amount" : {
        "currency" : "BTC",
        "amount" : "0.00066265"
     },
     "network" : {
        "status_description" : null,
        "status" : "off_blockchain"
     },
     "updated_at" : "2021-03-14T08:10:13Z",
     "id" : "f52fec7c-62a4-5d8e-ae48-6984f1d4cf57",
     "created_at" : "2021-03-14T08:10:13Z",
     "from" : {
        "id" : "c708062e-d621-51a6-86bf-6d451526b254",
        "currency" : "BTC",
        "resource" : "user",
        "resource_path" : "/v2/users/c708062e-d621-51a6-86bf-6d451526b254"
     },
     "instant_exchange" : false,
     "status" : "completed",
     "resource" : "transaction",
     "native_amount" : {
        "currency" : "CAD",
        "amount" : "49.97"
     }
  },
  {
     "updated_at" : "2021-03-12T21:13:18Z",
     "id" : "4c6d2668-7acb-52fb-b227-8164ad4335e5",
     "created_at" : "2021-03-12T21:13:04Z",
     "instant_exchange" : false,
     "status" : "completed",
     "resource" : "transaction",
     "native_amount" : {
        "amount" : "2.00",
        "currency" : "CAD"
     },
     "buy" : {
        "resource_path" : "/v2/accounts/063d32b5-3ea0-58fd-a3d6-e40bfefeee1c/buys/b092ff0b-6729-5080-87ba-32d7a8039811",
        "resource" : "buy",
        "id" : "b092ff0b-6729-5080-87ba-32d7a8039811"
     },
     "type" : "buy",
     "details" : {
        "header" : "Bought 0.00001425 BTC ($2.00)",
        "title" : "Bought Bitcoin",
        "subtitle" : "Using 4506********1976",
        "health" : "positive",
        "payment_method_name" : "4506********1976"
     },
     "resource_path" : "/v2/accounts/063d32b5-3ea0-58fd-a3d6-e40bfefeee1c/transactions/4c6d2668-7acb-52fb-b227-8164ad4335e5",
     "amount" : {
        "amount" : "0.00001425",
        "currency" : "BTC"
     },
     "description" : null
  },
  {
    "id": "57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
    "type": "send",
    "status": "completed",
    "amount": {
      "amount": "0.00500000",
      "currency": "BTC"
    },
    "native_amount": {
      "amount": "25.65",
      "currency": "CAD"
    },
    "description": null,
    "created_at": "2015-03-11T13:13:35-07:00",
    "updated_at": "2015-03-26T15:55:43-07:00",
    "resource": "transaction",
    "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
    "network": {
      "status": "off_blockchain",
      "name": "bitcoin"
    },
    "to": {
      "id": "a6b4c2df-a62c-5d68-822a-dd4e2102e703",
      "resource": "user",
      "resource_path": "/v2/users/a6b4c2df-a62c-5d68-822a-dd4e2102e703"
    },
    "details": {
      "title": "Send bitcoin",
      "subtitle": "to User 2"
    }
  }
]


const changeString = (stringToChange) => {
  if (stringToChange === 'send') {
    return 'Sent'
  } else if (stringToChange === 'buy') {
    return "Bought"
  }
}

  const fullCurrencyName = (currencyName) => {
    if (currencyName === 'BTC') {
      return 'Bitcoin'
    } else if (currencyName === 'ETH') {
      return 'Ethereum'
    } else {
      return currencyName;
    }
  }

  const fullDateConverter = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthNumber = parseInt(date.slice(5, 7))
    return` ${months[monthNumber - 1]} ${date.slice(8, 10)}, ${date.slice(0, 4)}`;
  }

const Transaction = (props) => {
  return (
      Object.keys(transactions).map((transaction, index) => (
          <div className="transaction-list" key={index}>
              <span className="input-label">{ changeString(transactions[transaction].type)} </span>
              <span className="input-label">{ fullCurrencyName(transactions[transaction].amount.currency) } </span><br/>
              <span className="input-label">{ transactions[transaction].amount.amount } </span>
              <span className="input-label">{ transactions[transaction].amount.currency} on </span>
              <span className="input-label">{ fullDateConverter(transactions[transaction].updated_at.split('T')[0])} </span>
              <br/>
          </div>
      ))
   


  )
}
export default Transaction;