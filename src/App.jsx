import React, { useState, useEffect } from 'react';

const TodoCard = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  const dueDate = new Date('2026-03-01T18:00:00Z');

  const calculateTime = () => {
    const now = new Date();
    const diff = dueDate - now;
    const absDiff = Math.abs(diff);
    
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24);

    if (diff < 0) return `Overdue by ${days} days and ${hours} hours`;
    if (days === 0 && hours === 0) return "Due now!";
    if (days === 0) return `Due in ${hours} hours`;
    return `Due in ${days} days`;
  };

  useEffect(() => {
    setTimeRemaining(calculateTime());
    const timer = setInterval(() => setTimeRemaining(calculateTime()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <article 
        data-testid="test-todo-card"
        className={`w-full max-w-[500px] bg-white rounded-xl shadow-lg p-6 border-l-8 transition-all ${
          isCompleted ? 'border-green-500 opacity-75' : 'border-blue-600'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <input
              id="todo-complete"
              type="checkbox"
              data-testid="test-todo-complete-toggle"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
              className="w-6 h-6 cursor-pointer accent-blue-600"
              aria-label="Mark task as complete"
            />
            <h2 
              data-testid="test-todo-title"
              className={`text-xl font-bold text-gray-800 ${isCompleted ? 'line-through text-gray-400' : ''}`}
            >
              Finish HNG Stage 0 Tasks
            </h2>
          </div>
          <span 
            data-testid="test-todo-priority"
            className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase"
          >
            High
          </span>
        </div>

        <p data-testid="test-todo-description" className="text-gray-600 mb-6">
          Complete both Backend and Frontend tasks before the midnight deadline.  
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-400 uppercase text-[10px] font-bold">Status</span>
            <strong data-testid="test-todo-status" className={isCompleted ? 'text-green-600' : 'text-amber-600'}>
              {isCompleted ? 'Done' : 'In Progress'}
            </strong>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 uppercase text-[10px] font-bold">Deadline</span>
            <time data-testid="test-todo-due-date" dateTime="2026-03-01">
              Due Mar 01, 2026
            </time>
          </div>
        </div>

        <div 
          data-testid="test-todo-time-remaining" 
          className="text-sm font-medium text-blue-700 bg-blue-50 p-2 rounded mb-6 text-center"
          aria-live="polite"
        >
          {timeRemaining}
        </div>

        <ul data-testid="test-todo-tags" className="flex flex-wrap gap-2 mb-8" role="list">
          <li data-testid="test-todo-tag-work" className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-700">#work</li>
          <li data-testid="test-todo-tag-urgent" className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-700">#urgent</li>
        </ul>

        <div className="flex gap-4 border-t pt-4">
          <button 
            data-testid="test-todo-edit-button"
            onClick={() => console.log("edit clicked")}
            className="flex-1 py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md font-medium transition-colors border"
          >
            Edit
          </button>
          <button 
            data-testid="test-todo-delete-button"
            onClick={() => alert("Delete clicked")}
            className="flex-1 py-2 px-4 bg-white hover:bg-red-50 text-red-600 rounded-md font-medium transition-colors border border-red-200"
          >
            Delete
          </button>
        </div>
      </article>
    </main>
  );
};

export default TodoCard;