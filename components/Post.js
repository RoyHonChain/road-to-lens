// components/Post.js
export default function Post(props) {
    const post = props.post;
    const time = post.createdAt;
    const shortTime = time.slice(0,10);
    return (
      <div className="p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="mt-2 text-base text-slate-700 whitespace-pre-line">
                {post.metadata.content}
              </div>
              <div className="mt-2 text-base text-slate-700 whitespace-pre-line">
                {shortTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }