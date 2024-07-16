import React from "react";
import Button from "./button/Button";

function EnterCode() {
    return (
        <div className="container">
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
                        <Button content={"Confirm"} destination={"/submit"}/>
                        <button className="btn" type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EnterCode;