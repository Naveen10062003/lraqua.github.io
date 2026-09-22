import { useState } from "react";
import { X, Bell, ChevronDown, ChevronUp, Calendar, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // States for new update fields
  const [newText, setNewText] = useState("");
  const [newTag, setNewTag] = useState("Announcement");

  // Dynamic user updates list
  const [updates, setUpdates] = useState([
    {
      id: 1,
      tag: "Alert",
      tagColor: "bg-red-500 text-white",
      text: "Welcome to LRAQUA News. Add your custom news broadcast below!",
      time: "Just now"
    }
  ]);

  // Helper to dynamically generate a Google Calendar link
  const getGoogleCalendarUrl = (update) => {
    const title = encodeURIComponent(`LRAQUA Update: [${update.tag}]`);
    const details = encodeURIComponent(`${update.text}\n\nSent via LRAQUA News Center.`);
    const now = new Date();
    const startStr = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    const endStr = oneHourLater.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${startStr}/${endStr}`;
  };

  const handleAddUpdate = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;

    let tagColor = "bg-blue-500 text-white";
    if (newTag === "Alert") tagColor = "bg-red-500 text-white";
    if (newTag === "Feature") tagColor = "bg-emerald-500 text-white";
    if (newTag === "Announcement") tagColor = "bg-amber-500 text-black";

    const newItem = {
      id: Date.now(),
      tag: newTag,
      tagColor,
      text: newText,
      time: "Just now"
    };

    setUpdates([newItem, ...updates]);
    setNewText("");
    setShowAddForm(false);
  };

  const handleDeleteUpdate = (id) => {
    setUpdates(updates.filter(item => item.id !== id));
  };

  return (
    <>
      {/* Floating Toggle Button (visible when sidebar is closed) */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all cursor-pointer border border-blue-400/20"
        >
          <Bell className="w-5 h-5 animate-bounce" />
          <span className="font-semibold text-sm">Latest Updates</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </motion.button>
      )}

      {/* Floating Sidebar Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md rounded-[1px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[70vh] shadow-slate-900/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                <h3 className="font-bold text-base tracking-wide">LRAQUA News Center</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Close updates"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrolling Feed Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {/* Form toggler / header info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-semibold text-slate-500">BROADCAST FEED</span>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Update
                </button>
              </div>

              {/* Add Update Form */}
              <AnimatePresence>
                {showAddForm && (
                  <motion.form
                    onSubmit={handleAddUpdate}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-[1px] space-y-2.5 overflow-hidden"
                  >
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">TAG CATEGORY</label>
                      <select
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1 text-xs text-slate-700 focus:outline-none focus:border-blue-500"
                      >
                        <option value="Announcement">Announcement</option>
                        <option value="Alert">Alert</option>
                        <option value="Feature">Feature</option>
                        <option value="Project Update">Project Update</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 mb-1">MESSAGE CONTENT</label>
                      <textarea
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Type update message..."
                        rows={3}
                        className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-2.5 py-1 text-slate-500 hover:text-slate-700 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-[1px] cursor-pointer"
                      >
                        Publish
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Expandable Notification Control */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>RECENT POSTS ({updates.length})</span>
                <button 
                  onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}
                  className="flex items-center gap-1 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {isNotificationsExpanded ? (
                    <>Hide <ChevronUp className="w-3.5 h-3.5" /></>
                  ) : (
                    <>Show <ChevronDown className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </div>

              {/* Items List */}
              <AnimatePresence>
                {isNotificationsExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-3 overflow-hidden"
                  >
                    {updates.length === 0 ? (
                      <p className="text-slate-400 text-xs italic text-center py-4">No recent updates.</p>
                    ) : (
                      updates.map((update) => (
                        <div 
                          key={update.id} 
                          className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-[1px] border border-slate-100 transition-all flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${update.tagColor}`}>
                              {update.tag}
                            </span>
                            <span className="text-[10px] text-slate-400">{update.time}</span>
                          </div>
                          <p className="text-slate-700 text-xs leading-relaxed font-medium">
                            {update.text}
                          </p>
                          <div className="flex justify-between items-center mt-1 pt-1.5 border-t border-slate-100">
                            <button
                              onClick={() => handleDeleteUpdate(update.id)}
                              className="text-[10px] text-red-400 hover:text-red-600 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                              title="Delete this update"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              Remove
                            </button>
                            <a
                              href={getGoogleCalendarUrl(update)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                            >
                              <Calendar className="w-3.5 h-3.5" />
                              Add to Google Calendar
                            </a>
                          </div>
                        </div>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Call to action */}
            <div className="p-3 bg-slate-50/80 border-t border-slate-100 text-center">
              <a 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="inline-block text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors hover:underline"
              >
                Need support? Contact engineering team &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
