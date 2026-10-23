import { useState } from "react";

type Entry ={
  id: number,
  text: string
}

export default function App() {
  const [input,setInput] = useState('')
  const [entries,setEntries] = useState<Entry[]>([])
  
  const handleAdd = () => {
      if (!input.trim()) return
      setEntries([...entries, { id: Date.now(), text: input }])
      setInput('')
    }
    
  return(
    <div>
      <h1>AI 결과물 기록장</h1>
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="기록할 내용을 입력하세요."
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.text}</li>
        ))}
      </ul>
    </div>
  )

}