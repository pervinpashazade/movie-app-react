import React from 'react'
import './style.css'

function StoryCircle(props) {
    const {
        data,
        showTitle,
    } = props
    return (
        <>
            <a href="0#" className="circle-story">
                <div className="circle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img
                        src={data.img ? data.img :
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAA6xJREFUeAHtm1tL5EAQRnvXO+iL4JNP/v/f5YOKIiredZYayDJbtjO7LjOTOp6GMFMdSPr7Tqo6CZ0fJycnk2bDOvATq0xhUwcEDL8QBCxguANweWawgOEOwOWZwQKGOwCXZwYLGO4AXJ4ZLGC4A3B5ZrCA4Q7A5ZnBAoY7AJdnBgsY7gBcnhksYLgDcHlmsIDhDsDlmcEChjsAl2cGCxjuAFyeGSxguANweWawgOEOwOWZwQKGOwCXZwYLGO4AXJ4ZLGC4A3B5ZrCA4Q7A5ZnBAoY7AJdnBsMBb1bSt7Gx0Q4PD9vu7m7b3Fzt0F9fX9vj42O7urpqb29vZWxbrUv/YUvAPT4+bvG7jhYX1P7+ftvb22unp6dlIJcp0ZG564I7e0ENVWS2b8z/ywCOsjyWNqaxLPKkDOBVz7nzjBvTWOaNM/aVAbxIiPv7Dgi47wumV8AYlH0hAu77gukVMAZlX4iA+75gegWMQdkXIuC+L5heAWNQ9oUIuO8LplfAGJR9IQLu+4LpFTAGZV/Itwd8e3vbYqO2Mis6lgHg6empXV5eTg+9s7PTtre3l3GatR7z22ZwrKs6Pz9vk8lkusX/9/f3tcJYxslxgKPc3tzczPUqoF5cXLRYSDe0l5eX39k89BF+USV6KLkBcGtra7pArgfp+vq6PTw8fNh1d3c3XbF5cHDwYV/VDkwGz5bcgBElN7Iyt/v7+xaAP2sxJz8/P3+2u1w/AnCv5MZ8enZ29sfy1gAepXlei2OR5mME4M9KbgD9yo0UaT4uPwcvKrnxNcLwKPQvpZcyH5cG/DclN8rxV19kxIVR/fm4bImOOXbZcyVhPi4LeFV3u9Xn47Il+ujoqMVmm+9A2QyeL8u9gwNlAM++VhwGv67fMY1lkQdlAMfjzljamMayyJMygMfyZX28Eo2xVGllAIex8WV9vIBYR4mMc8a5K33dHxdhqbvogLzoXXKVzFrVOMtk8KoMoZ1HwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtFDANKJJj4CTIbRQwDSiSY+AkyG0UMA0okmPgJMhtPAXPC0crYIvShYAAAAASUVORK5CYII="
                        }
                        alt={data.name}
                    />
                </div>
                {showTitle ?
                    <div className="title">
                        <span>{data.name}</span>
                    </div> : null
                }

            </a>
        </>
    )
}

export default StoryCircle;