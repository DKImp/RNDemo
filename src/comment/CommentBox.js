/**
 * Created by Administrator on 2018/3/13.
 */
'use strict';

import React from 'react';
import CommentList from './CommentList'
import CommentFrom from './CommentFrom'
import $ from 'jquery'
class CommonBox extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state = {data:[]};
        this.getComments();
        // setInterval(() => this.getComments(),5000);
    }
    handleCommentSubmit(comment){
        console.log(comment)
        let comments = this.state.data,
            nowComments = comments.concat(comment);
        this.setState({data:nowComments});
    }
    getComments(){
        console.log(this.props.url)
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache:false,
            success: comments =>{
                console.log(comments)
                this.setState({data:comments});
            },
            error: (xhr,status,error) => {
                console.log(error);
            }
        })
    }
    render(){
        return(
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentFrom onCommentSubmit = {this.handleCommentSubmit.bind(this)} />
            </div>
        )
    }
}
export {CommonBox as default}