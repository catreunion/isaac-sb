[Fillerama: A filler text generator](http://fillerama.io/)

[Next.js starter guide | CloudCannon](https://cloudcannon.com/documentation/articles/nextjs-starter-guide/?mtm_campaign=nextjsvideo&ssg=Next.js)

- get a Next.js site built, visually editable and live on CloudCannon

SSGs

The first step for connecting any site is to get your file system linked to CloudCannon. You’ll need to clone your files to disk before anything else — this is the same process as if you were working locally in your dev environment.

- updates on CloudCannon to push back to your repo

- Your editors can then contribute to the Software Development Life Cycle (SDLC). This step is configured through an OAuth connection with the relevant partner. Check out the Connecting Your First Site guide for more information on this step.

- Install Command : `yarn install`

- Build Command : `next build && next export`

- Output Path : path to the output folder where you are building into

You may find you need extra commands to complete your build. A common example is using postcss; for this you can use build hooks, adding specially named bash scripts that run at different steps in the build. For more information, see the build hook documentation.

Interlude: Your site is built #

In the top left corner of the screen under your site name, there is a blue link, styled adjective-noun.cloudvent.net. Clicking this link will open a new tab to the hosted site on CloudCannon. It is a helpful step at this point to check that the site looks correct. If it does, you can move on to editor configuration. If you need to update your build, this can be done in your settings.

If you find the site returned a 404 on the index, you might have set the wrong output path. This can be a sign that no files were present in the configured folder.

Data: These are standalone data files. This is ideal for site configuration or files that don’t need to repeat. Data is edited by altering to a single file.

Collections: A folder of files that represent a repeatable data format. This is a good fit for pages, blogs, staff members, recipes, etc. Collections are edited by altering any file or adding more files.

Fortunately, these terms align with the Next.js concepts of Data Fetching. More specifically:

- getStaticProps (Static Generation): Fetch data at build time.

- getStaticPaths (Static Generation): Specify dynamic routes to pre-render pages based on data.

Next.js can implement both of these calls with either Data or Collections. With a Collection getStaticProps would pull in a single file, and getStaticPaths would pull in each file as a path. With Data, getStaticProps would pull in the whole file or an array item within it, andgetStaticPaths would return nothing or each item in an array. It is recommended that Collections are used when implementing getStaticPaths.

- CloudCannon does not support Server-side Rendering as our build and hosting environments are decoupled.

- CloudCannon supports a set of file formats for files in Data or Collections:

  - Structured data files: JSON, YAML, TOML, CSV, TSV

  - Markup files: HTML, Markdown

  - Combination files: HTML with front matter, Markdown with front matter

  - Front matter refers to a section at the top of a markup file that contains structured data. CloudCannon supports JSON, YAML and TOML front matter. Markdown comes in many flavours, so be sure to checkout configuring your Markdown engine.

```js
export const getStaticProps = async (context) => {
  // CloudCannon edits content stored in local file system --> use an fs call
  const buffer = await fs.promises.readFile('config.json')
  const data = JSON.parse(buffer.toString('utf8'))

  return {
    props: { data },
  }
}
```

- Urban Next.js template

4: Tell CloudCannon about the data #

With all of our content organized into files, we need to tell CloudCannon how to read our structure. For this we use the CloudCannon reader, an open-source NPM library used to integrate editing.

Check out the documentation and define your collections. Once you have pushed your changes to CloudCannon, a new build will make new interfaces available. You will be able to:

Add, remove, edit and rename any collection item
Edit any data file

You will have numerous editing options available to you:

Source Editor: edit your code directly within CloudCannon in a familiar-looking editor.
Data Editor: Edit your data and front matter in a recursive form full of customizable inputs.
Add, remove, clone, rearrange and edit arrays
Open objects and edit content to any depth
Change data with date, color, number, URL, and more inputs
Content Editor: Edit your markdown files and data at the same time. A big content block for your markdown and an embedded data editor on the side. This is perfect for a combination of markdown and front matter files.
Visual Editor: A combination editor with your live site on one side and the data editor on the other side. The rest of this tutorial will focus on integrating the two sides more.

Visual editing on CloudCannon

- Previews: When data is changed in a data editor, the new data is sent to the page props. This allows the editor to see the changes as they make them. Since React does most of the work for us here, we can add a prebuilt higher-order component in a few minutes.

- Bindings: Tagging elements on the page tells CloudCannon where the data came from. CloudCannon can then attach a UI to those parts directly on the page. This frees the editor from using the Data Editor in the sidebar.
  The final result is something intuitive and easy to teach.

Your Data Editor will still be using the automatic configuration. If you find that some inputs could be improved, be sure to check out how to configure inputs.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
