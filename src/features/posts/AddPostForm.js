import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section className="my-4">
      <h2 className="text-2xl ">Add a New Post</h2>
      <form className="flex flex-col">
        <label htmlFor="postTitle" className="mt-4 mb-2">
          Post Title:
        </label>
        <input
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4"
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor" className="mt-4 mb-2">
          Author:
        </label>
        <select
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label className="mt-4 mb-2" htmlFor="postContent">
          Content:
        </label>
        <textarea
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-4"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          className="bg-purple-900 mt-4 border-none text-white font-bold py-2 px-4 rounded disabled:opacity-60 disabled:hover:opacity-60"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  )
}
