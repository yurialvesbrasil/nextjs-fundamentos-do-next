import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        description: { type: 'string', required: true },
        image: { type: 'string', required: false }
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/posts/${doc._raw.sourceFileName.replace(/\.md$/, '')}` },
    },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })