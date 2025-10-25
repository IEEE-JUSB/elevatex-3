"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getEvents, registerForEvent, type EventType } from "@/lib/eventRegistration";
import toast from "react-hot-toast";
import Link from "next/link";

const handleSignOut = () => {
  signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/login");
      },
    },
  });
};

function ClientCode() {
  const { data, isPending } = useSession();
  const [registeredEvents, setRegisteredEvents] = useState<EventType[]>();
  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>();

  const handleRegister = (eventId: string, userId: string) => {
    registerForEvent(eventId, userId)
    .then((res: boolean) => {
      if(res){
        toast.success("Registered successfully!");
        const newEvent = upcomingEvents?.find(e => e.id === eventId);
      if (newEvent) {
        setRegisteredEvents((prev) => {
          if (prev) return [...prev, newEvent];
          else return [newEvent];
        });
        setUpcomingEvents(prev => prev?.filter(e => e.id !== eventId));
      }
      }else{
        toast.error("Error while registering");
      }
    })
  }

  useEffect(() => {
    if(isPending) return;
    if (!data || !data.session) redirect("/login");

    getEvents(data.user.id).then((res) => {
      console.log(res);
      setRegisteredEvents(res.filter((e) => e.registered));
      setUpcomingEvents(res.filter((e) => !e.registered));
    });
  }, [isPending]);

  if (isPending) return <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-400 grid place-items-center w-full">
    <h1 className="text-4xl font-bold font-syne">Loading...</h1>
  </div>;

  if (!data) return;

  return (
    <div className="relative font-syne min-h-screen bg-gradient-to-br from-blue-300 to-blue-400 flex flex-col items-center gap-y-8 p-12">
      <h1 className="text-4xl lg:text-6xl font-bold">Dashboard</h1>
      <h2 className="font-medium text-lg sm:text-2xl">
        Welcome, {data.user.name}!
      </h2>
      <div className="w-full grid place-items-center sm:grid-cols-2 sm:p-8 gap-12">
        <div className="flex flex-col items-center gap-y-6 bg-white/30 p-6 rounded-xl w-full sm:w-3/4">
          <h3 className="text-2xl text-blue-800">Registered Events</h3>
          {registeredEvents && registeredEvents.length > 0 ? (
            registeredEvents.map((e) => (
              <div key={e.id} className="w-full grid grid-cols-2 place-items-center">
                {e.eventUrl ? <Link href={e.eventUrl} className="underline underline-offset-2">{e.name}</Link> : <p>{e.name}</p>}
                <p>{e.eventDate}</p>
              </div>
            ))
          ) : (
            <div>No registered events.</div>
          )}
        </div>
        <div className="flex flex-col items-center gap-y-6 bg-white/30 p-6 rounded-xl w-full sm:w-3/4">
          <h3 className="text-2xl text-blue-800">Upcoming Events</h3>
          {upcomingEvents && upcomingEvents.length > 0 ? (
            upcomingEvents.map((e) => (
              <div key={e.id} className="w-full grid grid-cols-3 place-items-center">
                <p>{e.name}</p>
                <p>{e.eventDate}</p>
                <button className="bg-blue-400 p-1 rounded-md cursor-pointer hover:bg-blue-600" onClick={()=>handleRegister(e.id, data.user.id)}>Register</button>
              </div>
            ))
          ) : (
            <div>No upcoming events to register.</div>
          )}
        </div>
      </div>
      <button
        className="absolute bottom-10 text-lg text-white bg-red-600 px-3 py-1 rounded-lg"
        onClick={() => handleSignOut()}
      >
        Logout
      </button>
    </div>
  );
}

export default ClientCode;
