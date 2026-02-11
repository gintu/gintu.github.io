export interface SkillCategory {
    title: string;
    content: string[];
}

const skillList: SkillCategory[] = [
    {
        title: 'Programming Languages',
        content: ['Typescript', 'Javascript', 'Python', 'C++'],
    },
    {
        title: 'Libraries and Frameworks',
        content: [
            'React',
            'React Native',
            'Redux',
            'Node.js',
            'Express',
            'Gatsby',
            'Storybook',
        ],
    },
    {
        title: 'Testing',
        content: ['Jest', 'React testing library'],
    },
    {
        title: 'Tools',
        content: ['Git', 'Github', 'Postman', 'Gitlab', 'Jira', 'Confluence'],
    },
    {
        title: 'Design Tools',
        content: ['Figma', 'Photoshop'],
    },
    {
        title: 'Bundlers',
        content: ['Webpack', 'Rollup'],
    },
];

export default skillList;
