import React from 'react';
import Task from '../Task';
import { TaskCardProps, TaskProps } from '../../interfaces/taskInterface';

const Other: React.FC<TaskCardProps> = ({ tasks }) => {
  return (
    <>
      <div className="flex-1 bg-gray-100 rounded-md p-4 mb-4">
        <h2 className="text-xl font-semibold font-sans">Other</h2>
        {tasks.map((task: TaskProps) => (
          <Task
            key={task._id}
            {...task}
          />
        ))}
      </div>
    </>
  );
};

export default Other;
