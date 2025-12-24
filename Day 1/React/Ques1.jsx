import { useState } from "react";

export default function DynamicFormBuilder() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions(prev => [
      ...prev,
      {
        id: Date.now(),
        text: "",
        type: "text"
      }
    ]);
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  };

  const removeQuestion = id => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Dynamic Survey Builder</h2>

      <button onClick={addQuestion}>➕ Add Question</button>

      {questions.map((q, index) => (
        <div key={q.id} style={{ marginTop: "10px" }}>
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={q.text}
            onChange={e =>
              updateQuestion(q.id, "text", e.target.value)
            }
          />

          <select
            value={q.type}
            onChange={e =>
              updateQuestion(q.id, "type", e.target.value)
            }
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>

          <button onClick={() => removeQuestion(q.id)}>❌</button>
        </div>
      ))}

      <hr />

      <h3>live Preview</h3>

      {questions.map(q => (
        <div key={q.id}>
          <label>{q.text || "Untitled Question"}</label>
          <input type={q.type} disabled />
        </div>
      ))}
    </div>
  );
}
