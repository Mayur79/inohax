"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, Clock } from 'lucide-react'

const events = [
  { date: "26th October 2024", time: "", title: "Applications Open", icon: "🚀", color: "from-purple-400 to-indigo-400" },
  { date: "9th Nov", time: "11:00 AM", title: "Hackathon Kick-off", icon: "🎬", color: "from-blue-400 to-cyan-400" },
  { date: "9th Nov", time: "12:00 PM", title: "Hackathon Starts", icon: "🏁", color: "from-green-400 to-emerald-400" },
  { date: "9th Nov", time: "5:00 PM", title: "First Mentorship Round", icon: "🧠", color: "from-yellow-400 to-amber-400" },
  { date: "10th Nov", time: "9:00 AM", title: "Second Mentorship Round", icon: "💡", color: "from-orange-400 to-red-400" },
  { date: "10th Nov", time: "12:00 PM", title: "Final Submission", icon: "📤", color: "from-pink-400 to-rose-400" },
  { date: "10th Nov", time: "2:45 PM", title: "Winner Announcement", icon: "🏆", color: "from-purple-400 to-indigo-400" },
]

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      timelineRef.current?.classList.add('animate-fade-in')
    }
  }, [isInView])

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center overflow-hidden">
      <motion.h1
        className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hackathon Timeline
      </motion.h1>
      <div className="w-full max-w-3xl relative" ref={timelineRef}>
        <div className="absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full" />
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            event={event}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}

interface TimelineEventProps {
  event: {
    date: string
    time: string
    title: string
    icon: string
    color: string
  }
  index: number
  isExpanded: boolean
  onToggle: () => void
}

function TimelineEvent({ event, index, isExpanded, onToggle }: TimelineEventProps) {
  const eventRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(eventRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={eventRef}
      className="mb-12 flex"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-black flex items-center justify-center z-10 shadow-lg border border-gray-700"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-3xl">{event.icon}</span>
      </motion.div>
      <div className="ml-8 flex-1">
        <motion.div
          className="bg-black rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(139, 92, 246, 0.1)" }}
          onClick={onToggle}
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${event.color}`}>
              {event.title}
            </h2>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <ChevronUp className="w-6 h-6 text-purple-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-purple-400" />
              )}
            </motion.div>
          </div>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <Calendar className="w-4 h-4 mr-2 text-purple-400" />
            {event.date}
            {event.time && (
              <>
                <Clock className="w-4 h-4 ml-4 mr-2 text-purple-400" />
                {event.time}
              </>
            )}
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mt-4 text-gray-300 bg-black p-4 rounded-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="mb-2">
                    Get ready for an exciting phase of our hackathon! This event marks a crucial milestone in our journey towards innovation and creativity.
                  </p>
                  <p>
                    Prepare yourself for intense coding, brainstorming, and collaboration. Don&apos;t forget to leverage the resources and mentorship available to make the most of this opportunity!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
