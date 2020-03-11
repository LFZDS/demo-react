
import React from 'react';

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
                {/*是commentList 里面<comment>{sas}</comment>*/}
            </div>
        );
    }
});

export default Comment;