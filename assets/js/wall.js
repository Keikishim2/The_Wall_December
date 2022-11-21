document.addEventListener("DOMContentLoaded", () => {
    const add_post = document.getElementById("post_btn");
    const fetch_all_thread = document.querySelector(".comment_thread");

    add_post.addEventListener("click", (e) => {
        displayPost(e);
    });
    fetch_all_thread.addEventListener("click", (e) => {
        allCommentsReplies(e);
    });
});

/**
 * DOCU: This function appends post on the wall if the field is not empty
 * Last Updated: Nov 20, 2022
 * @param event 
 * @author Kei Kishimoto
 */
function displayPost(event){
    event.preventDefault();
    const comment_container = document.querySelector(".comment_thread");
    const comment_wrapper = document.querySelector(".comment_wrapper.hidden").cloneNode(true);
    const add_post = document.querySelector(".post_it");
    const forms = document.querySelector(".add_post");


    if (add_post.value.trim() === "") {
        forms.className = "add_post error";
    } else {
        forms.classList.remove("error");
        comment_wrapper.setAttribute("class", "comment_wrapper");
        comment_wrapper.querySelector("p").innerHTML = add_post.value;
        add_post.value = "";
        comment_container.appendChild(comment_wrapper);
    }
}

/**
 * DOCU: This function adds comment on the post if the field is not empty
 * Last Updated: Nov 20, 2022
 * @param event 
 * @author Kei Kishimoto
 */
function addComments(event){
    event.preventDefault();
    const post_container = event.target.closest(".comment_wrapper");
    const reply_content = document.querySelector(".reply_content.hidden").cloneNode(true);
    const reply_comment_text = document.querySelector(".add_comment_area").value;

    if (document.querySelector(".add_comment_area").value === "") {
        reply_comment_text.className = "add_comment_area error"
    } else {
        reply_content.setAttribute("class", "reply_content");
        reply_content.querySelector(".replies").innerHTML = reply_comment_text;
        post_container.appendChild(reply_content);
        event.target.parentElement.remove();
    }

}

/**
 * DOCU: This function adds reply to the comment and option to delete each field
 * Last Updated: Nov 20, 2022
 * @param event 
 * @author Kei Kishimoto
 */
function allCommentsReplies(event){
    if (match(event.target, "reply")) {
        const parent_div = event.target.parentElement;
        const comments_replies = document.querySelector(".comments_replies").cloneNode(true);
        comments_replies.setAttribute("class", "comments_replies");
        comments_replies.querySelector(".reply_comment").setAttribute("class", "add_comment_area");
        parent_div.appendChild(comments_replies);

    }else if (match(event.target, "add_reply")) {
        addComments(event);
    }else if (match(event.target, "delete_comment")) {
        event.target.parentElement.remove();
    }
}

/**
 * DOCU: If the element has the class name, return true, otherwise return false.
 * Last Updated: Nov 20, 2022
 * @param el - The element to check
 * @param class_name - The class name to match.
 * @returns the result of the classList.contains() method.
 * @author Kei Kishimoto
 */
function match(el, class_name) {
    return el.classList.contains(class_name);
}