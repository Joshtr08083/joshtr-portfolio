
import Title from '../components/Title/Title';
import styles from "./about.module.css"

const Page = () => {
  return (
    <>

      <Title title={"About Me"} fromTop={18} bottomLine textShadow/>
      <main className={`${styles.container} w-full m-auto mt-15 sm:w-xl md:w-2xl lg:w-4xl xl:px-20 p-15`}>
        <p className={styles.text}>
          My name is Josh, I am an 18 year old high school student in the United States. I am currently intersted in Electrical and Computer Engineering.
          <br/><br/>
          I made this site partly to document projects I've worked on, but mainly as a way to learn the whole process of programming a website.
          <br/><br/>
          For a disclaimer, the projects you see on here aren't professional, or the "right" way of doing things. These were all done coming from a place of 
          not knowing much about the subject in an attempt to learn more.
          <br/><br/>
          If you want more info, you can reach out here:<br/>
          <a className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href="mailto:contact@joshtreid.com">contact@joshtreid.com</a>
        </p>
      </main>

    </>
  )
}

export default Page