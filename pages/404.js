import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        <span>404 - Page Not Found...</span>
        <style jsx>{`
          div {
            background-color: #eee;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          div span {
            color: darkblue;
            font-size: 2rem;
          }
        `}</style>
      </div>
    )
  }
}
