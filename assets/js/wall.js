document.addEventListener("DOMContentLoaded", () => {
    const add_post = document.getElementById("add_post");
    add_post.addEventListener("submit", addPost);            /* This will submit Post Form */
});


/**
 * DOCU: This function populates the new post on the wall
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function addPost(e){
    e.preventDefault();
    const text_post = document.querySelector("#text_post");
    const comments_thread = document.getElementById("comments_thread");
    const comments_wrapper = document.querySelector(".comments_wrapper.hidden").cloneNode(true);
    const comment_text = comments_wrapper.querySelector(".comment_text");

    if(text_post.value.length == 0){
        add_post.classList.add("error");
        add_post.classList.remove("active");
    }else{
        comments_wrapper.setAttribute("class", "comments_wrapper");
        comment_text.textContent = text_post.value;
        comments_wrapper.querySelector(".comment_form").addEventListener("submit", addCommentsReplies);
        comments_wrapper.querySelector(".delete_wrapper").addEventListener("click", popupDelete);
        comments_wrapper.querySelector(".no_action").addEventListener("click", popupDelete);
        comments_wrapper.querySelector(".yes_action").addEventListener("click", deletePost);
        comments_wrapper.querySelector(".edit_action").addEventListener("click", editCommentsReplies);
        comments_wrapper.querySelector(".edit_container").addEventListener("submit", saveCommentsReplies);
        add_post.classList.remove("error");
        add_post.classList.remove("active");
        text_post.value = "";
        comments_thread.appendChild(comments_wrapper);
    }
}

/**
 * DOCU: This function enables the user to add comments and replies to the post as well edit and delete
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function addCommentsReplies(e){
    e.preventDefault();
    const comment_form = e.target;
    const comments_and_replies = comment_form.closest(".comments_wrapper").querySelector(".comments_and_replies");
    const reply_wrapper = comment_form.closest(".comments_wrapper").querySelector(".reply_wrapper.hidden").cloneNode(true);
    const add_comment = comment_form.querySelector(".add_comment");

    if((add_comment.value.length == 0)){
        add_comment.closest("form").classList.add("error");
    }else{
        reply_wrapper.querySelector(".edit").addEventListener("click", editCommentsReplies);
        reply_wrapper.querySelector(".edit_reply").addEventListener("submit", saveReplies);
        reply_wrapper.querySelector(".delete").addEventListener("click", popupDelete);
        reply_wrapper.querySelector(".no_action_btn").addEventListener("click", popupDelete);
        reply_wrapper.querySelector(".yes_action_btn").addEventListener("click", deleteCommentsReplies);

        reply_wrapper.setAttribute("class", "reply_wrapper");
        reply_wrapper.querySelector(".reply").innerHTML = add_comment.value;
        add_comment.value = "";

        comments_and_replies.appendChild(reply_wrapper);
    }
}

/**
 * DOCU: This function shows the popup for delete confirmation
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function popupDelete(e){
    const delete_action = e.target;
    delete_action.closest(".delete_wrapper").classList.toggle("active");
}

/**
 * DOCU: This function deletes the entire post for the
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function deletePost(e){
    const yes_action = e.target;
    yes_action.closest(".comments_wrapper").remove();
}

/**
 * DOCU: This function deletes the replies on the wall
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function deleteCommentsReplies(e){
    e.target.closest(".reply_wrapper").remove();
}

/**
 * DOCU: This function edits the posts and replies on the wall
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function editCommentsReplies(e){
    const edit_action = e.target;
    const comment_text = edit_action.closest(".comments_wrapper").querySelector(".comment_text");
    const edit_field = edit_action.closest(".comments_wrapper").querySelector(".edit_field");

    edit_action.closest(".comments_wrapper").querySelector(".edit_post").classList.toggle("hidden");
    edit_field.value = comment_text.textContent;
}

/**
 * DOCU: This function saves and updates the new post
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function saveCommentsReplies(e){
    e.preventDefault();

    const edit_container = e.target;
    const edit_field = edit_container.querySelector(".edit_field");
    const comment_text = edit_container.closest(".comments_wrapper").querySelector(".comment_text");
    const edit_post = edit_container.closest(".edit_post");

    if((edit_field.value.length == 0)){
        edit_field.closest("form").classList.add("error");
    }else{
        edit_field.closest("form").classList.remove("error");
        comment_text.textContent = edit_field.value;
        edit_post.classList.add("hidden");
    }
}

/**
 * DOCU: This function enables the user to edit the reply
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function editCommentsReplies(e){
    const edit_reply_btn = e.target;
    const reply = edit_reply_btn.closest(".reply_wrapper").querySelector(".reply");
    const edit_field_reply = edit_reply_btn.closest(".reply_wrapper").querySelector(".edit_field_reply");

    edit_reply_btn.closest(".reply_wrapper").querySelector(".edit_comment").classList.toggle("hidden");
    edit_field_reply.value = reply.textContent;
}

/**
 * DOCU: This function enables the user to save and update the reply
 * Last Updated: December 28, 2022
 * @param e - the event object
 * @author Kei
 */
function saveReplies(e){
    e.preventDefault();

    const edit_reply = e.target;
    const edit_field_reply= edit_reply.querySelector(".edit_field_reply");
    const reply = edit_reply.closest(".reply_wrapper").querySelector(".reply");
    const edit_comment = edit_reply.closest(".edit_comment");

    if(edit_field_reply.value.length == 0){
        edit_field_reply.closest("form").classList.add("error");
    }else{
        edit_field_reply.closest("form").classList.remove("error");
        reply.textContent = edit_field_reply.value;
        edit_comment.classList.add("hidden");
    }
}