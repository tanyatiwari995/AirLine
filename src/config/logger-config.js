const {createLogger, format,transports}= require('winston');
const {combine, timestamp, printf} = format;

 const customFormat = printf(({ level, message,  timestamp }) => {
    return `${timestamp} : ${level}: ${message}`;
  })
  const logger = createLogger({
        format: combine(    
           timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
           }),   
           customFormat 
        ),
        transports: [
            new transports.Console({
                level: 'info',
                format: format.combine(
                    format.colorize(),
                    format.simple()
                )
            }),
            new transports.File({
                filename: 'combined.log',
                level: 'info',
                format: format.json()
            })
        ]  
        })    
        
        module.exports = logger;