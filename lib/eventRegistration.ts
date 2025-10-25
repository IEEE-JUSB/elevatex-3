"use server";
import prisma from "@/prisma/client";

export interface EventType {
  id: string;
  name: string;
  eventDate: string;
  registered: boolean;
  eventUrl: string | null;
}

export const getEvents = async (userId: string) => {
  const userEvents = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      registeredEvents: true,
    },
  });
  const allEvents = await prisma.event.findMany();
  const finalEvents: EventType[] = [];
  const userEventIds: string[] = [];

  if (userEvents) {
    userEvents.registeredEvents.forEach((e) => {
      userEventIds.push(e.id);
      finalEvents.push({
        ...e,
        eventDate: e.eventDate.toDateString(),
        registered: true,
      });
    });
    allEvents.forEach(e => {
        if(!(userEventIds.includes(e.id))) finalEvents.push({
        ...e,
        eventDate: e.eventDate.toDateString(),
        registered: false,
      });
    })
  } else {
    return allEvents.map(e => ({
        ...e,
        eventDate: e.eventDate.toDateString(),
        registered: false,
      }));
    }
  return finalEvents;
};

export const registerForEvent = async (eventId: string, userId: string) => {
  try{
    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        registeredEvents: {
          connect: {id: eventId}
        }
      }
    });
    return true;
  }catch(err){
    console.error(err);
    return false;
  }
}