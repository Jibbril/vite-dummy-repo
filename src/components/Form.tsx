import Input from "./Input"
import TextArea from "./TextArea"

export default function Form() {

    return (
        <div>
            <h1>Test form</h1>
            <form className="form" >
                <Input name="Name"  type="text" />
                <Input name="Email" type="email" />
                <TextArea name="Message" />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}