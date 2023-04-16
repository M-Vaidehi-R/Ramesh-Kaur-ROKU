//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheCommentSection',
    props: ['mediaId'],

    template: `
    
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div class="comment">
          <span class="comment-author">{{ comment.author }}</span>
          <span class="comment-text">{{ comment.text }}</span>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addComment">
      <input type="text" v-model="newComment.author" placeholder="Your name">
      <textarea v-model="newComment.text" placeholder="Leave a comment"></textarea>
      <button type="submit">Post Comment</button>
    </form>
  </div>

    `,

    data() {
        return {
                  comments: [],
      newComment: { author: '', text: '' }
        };
    },

    methods: {
        fetchComments() {
            const requestOptions = {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            };
            fetch(`/comments/${this.mediaId}`, requestOptions)
              .then(response => response.json())
              .then(data => {
                this.comments = data;
              })
              .catch(error => {
                console.error(error);
              });
            },

            submitComment() {
                const comment = this.newComment;
                const mediaId = this.mediaId;
                
                fetch('/comments', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ mediaId, comment })
                })
                  .then(response => response.json())
                  .then(data => {
                    this.comments.push(data);  
                    this.newComment = ''; 
                  })
                  .catch(error => {
                    console.error(error);
                  });
              }
    },

    mounted() {
        this.fetchComments();
    }

};

