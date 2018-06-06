/**
 * Created by Administrator on 2018/3/13.
 */
'use strict';
import React from 'react';

class CommentFrom extends React.Component{
    handleSubmit(event){
        console.log(event)
        event.preventDefault();
        console.log('提交..')
        let author = this.refs.author.value,
            text = this.refs.text.value;
            console.log(author,text);
        this.props.onCommentSubmit({author,text,date:'刚刚'});
    }

    render(){
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                添加评论
                </button>
            </form>
        );
    }
}
export { CommentFrom as default }