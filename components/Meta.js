import Head from "next/head";

const Meta = ({title,keywords,description}) => {
    return (
    <Head>
        <meta name='viewport' content= 'width-width, intial-scale=1'/>
        <meta name='keywords' content= {keywords}/>
        <meta name='description' content={description}/>
        <meta charSet='utf-8'/>
        <link rel='icon' href='/favicon.ico'/>
        <title>{title}</title>
    </Head>
    )
}

Meta.defaultProps = {
    title : "WebDev Newz",
    keywords: "web development,programming",
    description: "Get to the lastest news we dev"
}

export default Meta;