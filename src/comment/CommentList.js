/**
 * Created by Administrator on 2018/3/13.
 */
'use strict';
import React from 'react';
import Comment from './Comment'
class CommentList extends React.Component{
    render(){
        let commentNodes = this.props.data.map(comment=>{
                return (
                  <div>
                    <Comment author={comment.author} date={comment.date}>{comment.text}</Comment>
                  </div>
                  )
        });
        return(
            <div>{commentNodes}</div>
         )
    }
}
export {CommentList as default}