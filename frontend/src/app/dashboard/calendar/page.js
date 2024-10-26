import React from 'react';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

const Calendar = () => {
  return (
    <>
      {/* Calendar Section Start */}
      <Box className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <Table className="w-full">
          <TableHead>
            <TableRow className="grid grid-cols-7 bg-blue-600 ">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                <TableCell
                  key={index}
                  className={`flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5 ${
                    index === 0 ? 'rounded-tl-sm' : index === 6 ? 'rounded-tr-sm' : ''
                  }`}
                >
                  <Typography className="hidden lg:block text-white">{day}</Typography>
                  <Typography className="block lg:hidden text-black">{day.slice(0, 3)}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* First row of dates */}
            <TableRow className="grid grid-cols-7">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <TableCell
                  key={day}
                  className="relative h-24 border border-stroke p-4 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-30"
                >
                  <span className="font-medium text-black">{day}</span>
                  {day === 1 && (
                    <Box className="group h-16 w-full flex-grow cursor-pointer py-2 md:h-30">
                      <Typography className="group-hover:text-primary md:hidden text-black">More</Typography>
                      <Box className="event invisible absolute left-2 z-99 mb-1 flex w-[220%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-2 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[200%] md:opacity-100">
                        <Typography className="event-name text-sm font-semibold text-black">Redesign Website</Typography>
                        <Typography className="time text-sm font-medium text-black">1 Dec - 2 Dec</Typography>
                      </Box>
                    </Box>
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/* Second row of dates */}
            <TableRow className="grid grid-cols-7">
              {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                <TableCell
                  key={day}
                  className="relative h-24 border border-stroke p-4 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-30"
                >
                  <span className="font-medium text-black">{day}</span>
                </TableCell>
              ))}
            </TableRow>

            {/* Third row of dates */}
            <TableRow className="grid grid-cols-7">
              {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                <TableCell
                  key={day}
                  className="relative h-24 border border-stroke p-4 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-30"
                >
                  <span className="font-medium text-black">{day}</span>
                </TableCell>
              ))}
            </TableRow>

            {/* Fourth row of dates */}
            <TableRow className="grid grid-cols-7">
              {[22, 23, 24, 25, 26, 27, 28].map((day) => (
                <TableCell
                  key={day}
                  className="relative h-24 border border-stroke p-4 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-30"
                >
                  <span className="font-medium text-black">{day}</span>
                  {day === 25 && (
                    <Box className="group h-16 w-full flex-grow cursor-pointer py-2 md:h-30">
                      <Typography className="group-hover:text-primary md:hidden text-black">More</Typography>
                      <Box className="event invisible absolute left-2 z-99 mb-1 flex w-[220%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-2 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[200%] md:opacity-100">
                        <Typography className="event-name text-sm font-semibold text-black">App Design</Typography>
                        <Typography className="time text-sm font-medium text-black">25 Dec - 27 Dec</Typography>
                      </Box>
                    </Box>
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/* Fifth row of dates */}
            <TableRow className="grid grid-cols-7">
              {[29, 30, 31, 1, 2, 3, 4].map((day) => (
                <TableCell
                  key={day}
                  className="relative h-24 border border-stroke p-4 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-30"
                >
                  <span className="font-medium text-black">{day}</span>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      {/* Calendar Section End */}
    </>
  );
};

export default Calendar;
