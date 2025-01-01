
const ResumeEditor = () => {
  return (
    <div>
        <h1>Resume Editor</h1>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />
            </div>
            <div>
                <label htmlFor="summary">Summary:</label>
                <textarea id="summary" name="summary"></textarea>
            </div>
            <div>
                <label htmlFor="experience">Experience:</label>
                <textarea id="experience" name="experience"></textarea>
            </div>
            <div>
                <label htmlFor="education">Education:</label>
                <textarea id="education" name="education"></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default ResumeEditor