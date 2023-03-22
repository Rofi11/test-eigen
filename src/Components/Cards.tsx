import {Card, Button} from 'antd'
import '../Assets/Styles/Cards.scss'

type dataProps = {
    data : {
        author : string,
        title : string,
        description : string,
        url : string,
        urlToImage : string,
        publishedAt : string,
        constent : string
    }[]
}

export const Cards = (props: dataProps):any => {
    console.log(props.data);
    return (
        <>
        {props.data.map((val) => {
            console.log(val);
            return<div className='container-card'>
                    <div>
                        <img src={val.urlToImage} alt="gambar" />
                    </div>
                    <div className='card-content'>
                        <div className='title'>{val.title}</div>
                        <span className='author'>{val.author}</span>
                        <span className='publish'>{val.publishedAt}</span>
                        <div className='description'>{val.description}</div>
                        <div className='button'>
                            <Button><a target={'_blank'} href={val.url}>Read More</a></Button>
                        </div>
                    </div>
                </div>
        })}
        </>
    )
};