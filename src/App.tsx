import React from 'react'
import api from './lib/Axios'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsFetch } from './redux/states/newsState'

const App = () => {

  const { news, isLoading }: any = useSelector<any>(state => state.newsReducer)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getNewsFetch())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>

  // const [news, setNews] = React.useState<any>([])

  // const fetchNewsAPI = async () => {
  //   const res = await api.get(`/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  //   setNews(res.data.articles)
  // }

  // React.useEffect(() => {
  //   fetchNewsAPI()
  // }, [news])

  console.log(news)

  return (
    <div className="flex flex-col items-center justify-start w-full h-screen overflow-y-auto py-5 space-y-10 text-white bg-neutral-800">
      <h1 className="font-bold text-2xl">React Redux-Saga (News API)</h1>
      {/* <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 w-full max-w-7xl">
        {news.map((item: { title: string, author: string, description: string, url: string, urlToImage: string, publishedAt: Date }, i: number) => (
          <a
            key={i}
            href={`${item.url}`}
            target="_blank"
            className="flex flex-col w-full rounded-xl border border-neutral-600 p-3 space-y-3"
          >
            <h1 className="font-bold text-xl text-blue-500">{ item.title }</h1>
            <div className="flex w-full">
              <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <p className="font-normal text-base">{ item.description }</p>
              <span className="text-xs text-neutral-400">{ moment(item.publishedAt).format('LL') }</span>
            </div>
          </a>
        ))}
      </div> */}
    </div>
  )
}

export default App