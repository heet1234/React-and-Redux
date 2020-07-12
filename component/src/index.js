import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 6:00AM"
					content="Nice Blog"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex" 
					timeAgo="Today at 5:45PM"
					content="I like the subject"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane" 
					timeAgo="Yesterday at 1:12PM"
					content="I love the writing"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));