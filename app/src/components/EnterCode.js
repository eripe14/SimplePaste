import React from "react";

function EnterCode() {
    return (
        <div className="container">
            <div className="header">
                <img src="/app/src/assets/logo.png" alt="SimplePaste Icon" />
                    <h1>SimplePaste - A Simple Paste Service</h1>
            </div>
            <div className="box">
                <h2>Enter your code:</h2>
                <form action="/submit" method="post">
                    <div className="form-group">
                        <textarea id="codeInput"
                                  className="form-control"
                                  rows="25"
                                  placeholder="Enter your code here..."
                                  name="content"
                                  required
                        >
                        </textarea>
                        <button className="btn" type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EnterCode;