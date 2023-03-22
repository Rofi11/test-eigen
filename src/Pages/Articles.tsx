import { Navbar } from "../Components/Navbar"
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Cards } from "../Components/Cards"
import '../Assets/Styles/Articles.scss'
import {Input} from 'antd'

export const Articles = () => {
const [dataNews ,seDataNews] = useState<any[]>([])

    const getNews = ():any => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=56ab7696fc81400c8bfe3abb2e45577b`)
        .then((res) => {
            seDataNews(res.data.articles)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="content-utama">
                <div className="content-cards">
                    <Cards data={dataNews}/>
                </div>
                <div className="content-samping">
                    <div className="input">
                        <Input placeholder="Search..." style={{padding : 10}}/>
                    </div>
                    <div className="topic">
                        <div className="judul">
                            Topic
                        </div>
                        <div className="isi">
                            <div>Qoutes</div>
                            <div>Fiction</div>
                            <div>Biograpy</div>
                            <div>Motivation</div>
                            <div>Inpiration</div>
                            <div>life lessons</div>
                            <div>Self Development</div>
                            <div>Articles</div>
                            <div>History</div>
                            <div>Novel</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}