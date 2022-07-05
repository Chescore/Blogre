import React from 'react';

const PostArticle = () => {

    return (
        <div>
            <div>
                <label>Category:</label>
                <input type='text'/>
            </div>
            <div>
                <label>Tags:</label>
                <input type='text'/>
            </div>
            <div>
                <label>Location:</label>
                <input type='text'/>
            </div>
            <div>
                <label>File upload</label>
                <input type='image' alt='file-upload'/>
            </div>
            <div>
                <label>Title:</label>
                <input type='text'/>
            </div>
            <div>
                <label>Write your article here:</label>
                <input type='text'/>
            </div>
        </div>
    );
};

export default PostArticle;