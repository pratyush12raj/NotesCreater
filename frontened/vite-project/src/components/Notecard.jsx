



import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../context/NoteContext";

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (note) {
      setEditData({
        title: note.title,
        content: note.content,
      });
    }
  }, [note]);

  const handleUpdate = () => {
    updateNote(note._id, editData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border rounded-lg p-2 w-full mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />

          <textarea
            className="border rounded-lg p-2 w-full mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            rows="3"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
          />

          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-1.5 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-1.5 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {note.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            {note.content}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>
              {new Date(note.createdAt).toLocaleDateString("en-GB")}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notecard;

