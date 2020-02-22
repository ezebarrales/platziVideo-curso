import React, { useState, useEffect, useRef } from 'react'
import Video from 'react-native-video'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import PlayerLayout from '../components/PlayerLayout'
import ControlLayout from '../components/ControlLayout'
import PlayPause from '../components/PlayPause'
import InfoPlayer from '../components/InfoPlayer'

const Player = () => {

    const [loading, setLoading] = useState(true)
    const [paused, setPaused] = useState(false)
    const [showInformation, setShowInformation] = useState(false)

    const showInformationTimer = useRef(false)

    const onBuffer = ({ isBuffering }) => {
        console.log(isBuffering)
        setLoading(isBuffering)
    }

    const onLoad = () => {
        setLoading(false)
    }

    const playPause = () => {
        setPaused(!paused)
    }

    const informationPress = () => {
        setShowInformation(true)
        showInformationTimer.current = setTimeout(() => {
            setShowInformation(false)
        }, 3000)
    }

    useEffect(() => {
        return () => {
            showInformationTimer.current
        }
    }, [])

    return (
        <PlayerLayout
            loading={loading}
            loader={<ActivityIndicator color="red" size="large" />}
            controls={
                <InfoPlayer
                    onPress={informationPress}
                    show={showInformation}
                    onPlayPause={playPause}
                    paused={paused}
                />
            }
        >
            <Video
                source={{uri: 'https://storage.coverr.co/videos/coverr-close-up-of-christmas-tree-ornaments-1576561146080?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc4MTAxODAyfQ.2v_6WfD3tkscv2Ag3XNKglRRxRDcJCloMvWg8mW30tE'}}
                style={styles.video}
                resizeMode="contain"
                repeat
                onBuffer={onBuffer}
                onLoad={onLoad}
                paused={paused}
            />
        </PlayerLayout>
    )
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})

export default Player