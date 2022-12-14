import './MyRecordExercise.css'
import MyExerciseData from '../../MyExerciseData'
import { useEffect, useState } from 'react'
import MyRecordExerciseItem from './MyRecordExerciseItem'
import { nanoid } from 'nanoid'

function MyRecordExercise() {
    const [exerciseData, setExerciseData] = useState(MyExerciseData[0])

    useEffect(() => {
        setExerciseData(MyExerciseData[0])
    }, [exerciseData])
    const exerciseItemElements = exerciseData.exerciseLogs.map((item) => {
        return <MyRecordExerciseItem
            key={nanoid()}
            category={item.category}
            type={item.type}
            difficulty_level={item.difficulty_level}
            calories={item.calories}
            duration={item.duration}
        />
    }
    )
    return (
        <div className='my-record-exercise'>
            <h3 className='title'>MY<br />EXERCISE <span className='date'>{exerciseData.date}</span></h3>
            <div className='record-exercise-list'>
                {exerciseItemElements}
            </div>
        </div>
    )
}

export default MyRecordExercise