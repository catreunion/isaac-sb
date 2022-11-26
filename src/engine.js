import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export const getSortedPosts = () => {
  const files = fs.readdirSync(postsDirectory)
  const posts = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const jsonContent = matter(fileContent)

    return {
      id: id,
      ...jsonContent.data,
    }
  })

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getIDs = () => {
  const files = fs.readdirSync(postsDirectory)
  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getOnePost = async (id) => {
  const filePath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const jsonContent = matter(fileContent)
  const contentHTML = (await remark().use(html).process(jsonContent.content)).toString()

  return {
    id,
    contentHTML,
    ...jsonContent.data,
  }
}

// return allPosts.sort(({ date: a }, { date: b }) => {
//   if (a < b) {
//     return 1
//   } else if (a > b) {
//     return -1
//   } else {
//     return 0
//   }
// })
