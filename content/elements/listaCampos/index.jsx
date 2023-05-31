import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const FieldList = ({ fields, onFieldDelete }) => {
  return (
    <Droppable droppableId="fieldList">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {fields.map((field, index) => (
            <div key={field.id} className="field">
              <div className="field-info">
                <span>{field.label}</span>
                <button onClick={() => onFieldDelete(field.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FieldList;