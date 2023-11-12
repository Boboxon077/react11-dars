import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

function addBook() {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'books'), {
            title,
        })

        setTitle("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary my-10">add</button>
            </form>
        </div>
    );
}

export default addBook;
