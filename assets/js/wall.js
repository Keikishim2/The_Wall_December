document.addEventListener("DOMContentLoaded", () => {
    const add_post = document.getElementById("post_btn");
    const fetch_all_thread = document.querySelector(".comment_thread");
    const post_wall = document.querySelector("#post_wall");

    add_post.addEventListener("click", (e) => {
        displayPost(e);
    });

    fetch_all_thread.addEventListener("click", (e) => {
        allCommentsReplies(e);
    });

    post_wall.addEventListener("click", (e) => {
        triggerDeleteAction(e);
    });
});

/**
 * DOCU: This function adds post to the wall if the field is not empty
 * Last Updated: Nov 21, 2022
 * @param event - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function displayPost(event){
    event.preventDefault();
    const comment_container = document.querySelector(".comment_thread");
    const comment_wrapper = document.querySelector(".comment_wrapper.hidden").cloneNode(true);
    const add_post = document.querySelector(".post_it");
    const forms = document.querySelector(".add_post");

    if(add_post.value.trim() === ''){
        forms.className = "add_post error";
    }else{
        forms.classList.remove("error");
        comment_wrapper.setAttribute("class", "comment_wrapper");
        comment_wrapper.querySelector("p").innerHTML = add_post.value;
        add_post.value = "";
        comment_container.appendChild(comment_wrapper);
    }
}

/**
 * DOCU: This function adds comments to the wall if the field is not empty
 * Last Updated: Nov 21, 2022
 * @param event - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function addComments(event){
    event.preventDefault();
    const post_container = event.target.closest(".comment_wrapper");
    const reply_content = document.querySelector(".reply_content.hidden").cloneNode(true);
    const reply_comment = document.querySelector(".add_comment_area").value;

    if(document.querySelector(".add_comment_area").value === ""){
        reply_comment.className = "add_comment_area error";
    }else{
        reply_content.setAttribute("class", "reply_content");
        reply_content.querySelector(".replies").innerHTML = reply_comment;
        post_container.appendChild(reply_content);
        event.target.parentElement.remove();
    }
}
/**
 * DOCU: This function adds replies to the comments pertaining to the wall post if the field is not empty
 * Last Updated: Nov 21, 2022
 * @param event - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function allCommentsReplies(event){
    if(match(event.target, "reply")){
        const parent = event.target.parentElement;
        const comments_replies = document.querySelector(".comments_replies").cloneNode(true);
        comments_replies.setAttribute("class", "comments_replies");
        comments_replies.querySelector(".reply_comment").setAttribute("class", "add_comment_area");
        parent.appendChild(comments_replies);
        
    }else if(match(event.target, "add_reply")){
        addComments(event);
    }
}

/**
 * DOCU: When the delete button is clicked, add the class 'active' to the parent element of the delete button.
 * Last Updated: December 27, 2022
 * @author Kei
 */
function deleteButton(){
    const delete_button = document.querySelectorAll(".delete_comment");

    for(let remove of delete_button){
        remove.addEventListener("click", () => {
            remove.closest(".delete_comment_container").classList.add("active");
        });
    }
}

/**
 * DOCU: When the delete button is clicked, the delete button is removed and the delete action is triggered.
 * Triggered By: post_wall.addEventListener("click", (e) => {triggerDeleteAction(e);
 * Last Updated: December 27, 2022
 * @author Kei
 */
function triggerDeleteAction(){
    deleteButton();
    actionsDelete();
}

/**
 * DOCU: This function removes the comment_wrapper div when the yes_action button is clicked.
 * Last Updated: December 27, 2022
 * @author Kei
 */
function actionsDelete(){
    const no_action = document.querySelectorAll(".no_action");
    const yes_action = document.querySelectorAll(".yes_action");

    for(let no of no_action){
        no.addEventListener("click", () =>{
            no.closest(".delete_comment_container").classList.remove("active");
        });
    }
    for(let yes of yes_action){
        yes.addEventListener("click", () =>{
            yes.closest(".comment_wrapper").remove();
        });
    }
}

/**
 * DOCU: This function finds the class name and returns it true, otherwise returns false.
 * Last Updated: Nov 21, 2022
 * @param el - element to check
 * @param class_name - the class name to match
 * @author Kei Kishimoto
 */
function match(el, class_name){
    return el.classList.contains(class_name);
}