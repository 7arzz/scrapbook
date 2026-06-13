import favPerson from "../assets/fav-person.jpg";
import bintang from "../assets/bintang.png";
import loveBallon from "../assets/loveBallon.png";
import bumi from "../assets/bumi.png";
import kucing from "../assets/kucing.png";
import kucing1 from "../assets/kucing1.png";
import doodle from "../assets/doodle.png";
import doodle1 from "../assets/doodle1.png";
import doodle2 from "../assets/doodle2.png";
import doodle3 from "../assets/doodle3.png";

export const journalData = [
  {
    id: 1,
    front: {
      template: "cover",
      title: "Our Memories",
      className: "cover-main",
    },
    back: {
      template: "lined",
      pageClass: "page-1",
      lines: [
        { type: "text", text: "Hai", className: "handwritten large" },
        { type: "text", text: "This is for you", className: "handwritten" },
        {
          type: "text",
          text: "My favorit person",
          className: "handwritten bottom-txt",
        },
        { type: "doodle", name: "dashed-loop" },
        { type: "image", src: favPerson },
      ],
    },
  },
  {
    id: 2,
    front: {
      template: "lined",
      pageClass: "page-2",
      lines: [
        { type: "image", src: loveBallon, className: "sticker-right" },
        {
          type: "text",
          text: "Happy",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "Graduation",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "adek....",
          className: "handwritten underlined-red",
        },
        { type: "doodle", name: "balloon" },
        {
          type: "text",
          text: "Buat kamu orang yang",
          className: "handwritten shift-right",
        },
        {
          type: "text",
          text: "ndak tau Jodoh Siapa",
          className: "handwritten shift-right",
        },
        { type: "text", text: ":)", className: "handwritten smiley" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-3",
      lines: [
        { type: "doodle", name: "hearts-top" },
        {
          type: "text",
          text: "Selamat atas kelulusannya",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "makin Sukses dan Jaya",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "ya.... doa terbaik buat",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "adek. Semoga kedepannya",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "Semesta lebih berpihak",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "Sama adek, Semoga bisa",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "dapet in apa yang selama",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "ini adek perjuangin ,",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "Semoga bahagia",
          className: "handwritten underlined-red",
        },
        {
          type: "text",
          text: "Selamanya.",
          className: "handwritten underlined-red",
        },
      ],
    },
  },
  {
    id: 3,
    front: {
      template: "lined",
      pageClass: "page-4",
      lines: [
        {
          type: "text",
          text: "i don't say",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: '"i love you"',
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "but i always",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "Pray to god",
          className: "handwritten center-txt",
        },
        {
          type: "image",
          src: bintang,
          className: "doodle-image",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-5",
      lines: [
        { type: "doodle", name: "purple-hearts-top" },
        {
          type: "text",
          text: "Semoga Semua cita",
          spans: [
            { text: "Semoga", className: "circled-purple" },
            { text: " Semua cita" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "Citamu terwujud ,",
          spans: [
            { text: "Citamu " },
            { text: "terwujud ,", className: "underlined-purple" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "Semoga kamu berhasil",
          className: "handwritten",
        },
        {
          type: "text",
          text: "membahagiakan",
          className: "handwritten underlined-purple",
        },
        { type: "text", text: "orang tua....", className: "handwritten" },
        { type: "doodle", name: "purple-hearts-bottom" },
      ],
    },
  },
  {
    id: 4,
    front: {
      template: "lined",
      pageClass: "page-6",
      lines: [
        {
          type: "text",
          text: "Semoga Selalu",
          spans: [
            { text: "Semoga", className: "circled-blue" },
            { text: " Selalu" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "mendapatkan hal - hal",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "baik dimanapun adek",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "berada, Semoga adek",
          spans: [
            { text: "berada, " },
            { text: "Semoga", className: "underlined-blue" },
            { text: " adek" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "Selalu dikelilingi orang",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "baik, Sayang sama",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "adek, Senantiasa bahagia",
          spans: [
            { text: "adek, Senantiasa " },
            { text: "bahagia", className: "underlined-blue" },
          ],
          className: "handwritten blue-ink",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-7",
      lines: [
        { type: "doodle", name: "exclamation-top" },
        {
          type: "text",
          text: "Semoga ilmunya",
          spans: [
            { text: "Semoga", className: "circled-orange" },
            { text: " ilmunya" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "berkah, dipermudah",
          spans: [
            { text: "berkah, " },
            { text: "dipermudah", className: "circled-orange" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "jalannya , dan", className: "handwritten" },
        {
          type: "text",
          text: "diberikan kesuksesan",
          spans: [
            { text: "diberikan " },
            { text: "kesuksesan", className: "circled-orange" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "dimanapun adek berada",
          spans: [
            { text: "dimanapun", className: "circled-orange" },
            { text: " adek berada" },
          ],
          className: "handwritten",
        },
        {
          type: "image",
          src: kucing,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 5,
    front: {
      template: "lined",
      pageClass: "page-8",
      lines: [
        {
          type: "text",
          text: "teruslah tumbuh ,",
          spans: [
            { text: "teruslah " },
            { text: "tumbuh ,", className: "circled-purple" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "aku akan melihatmu", className: "handwritten" },
        {
          type: "text",
          text: "berproses dengan",
          spans: [
            { text: "berproses", className: "circled-purple" },
            { text: " dengan" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "Jarak yang Paling", className: "handwritten" },
        {
          type: "text",
          text: "Jauh dan akan Selalu",
          spans: [
            { text: "Jauh", className: "circled-purple" },
            { text: " dan akan " },
            { text: "Selalu", className: "circled-purple" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "menjadi orang yang", className: "handwritten" },
        {
          type: "text",
          text: "Paling bangga di Setiap",
          spans: [
            { text: "Paling " },
            { text: "bangga", className: "circled-purple" },
            { text: " di Setiap" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "Prosesmu",
          spans: [{ text: "Prosesmu", className: "circled-purple" }],
          className: "handwritten",
        },
        { type: "doodle", name: "purple-hearts-corner" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-9",
      lines: [
        { type: "text", text: "Semoga tuhan selalu", className: "handwritten" },
        { type: "text", text: "melindungi senyummu", className: "handwritten" },
        { type: "text", text: "dan hatimu ,", className: "handwritten" },
        {
          type: "text",
          text: "aku adalah orang yang",
          className: "handwritten",
        },
        {
          type: "text",
          text: "Selalu bahagia melihat-",
          className: "handwritten",
        },
        { type: "text", text: "mu baik-baik saja", className: "handwritten" },
        {
          type: "image",
          src: doodle,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 6,
    front: {
      template: "lined",
      pageClass: "page-10",
      lines: [
        {
          type: "text",
          text: "Makasih ya udah mau",
          spans: [
            { text: "Makasih", className: "underlined-blue" },
            { text: " ya udah mau" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "bertahan sampai detik",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "ini Selalu Sabar ngadepin",
          spans: [
            { text: "ini Selalu " },
            { text: "Sabar ngadepin", className: "underlined-blue" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "masalah masalah yang ada",
          spans: [
            { text: "masalah masalah", className: "underlined-blue" },
            { text: " yang ada" },
          ],
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "makasih yaa udah mau bertahan",
          className: "handwritten blue-ink",
        },
        {
          type: "text",
          text: "sejauh ini",
          className: "handwritten blue-ink",
        },
        { type: "doodle", name: "blue-heart" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-11",
      lines: [
        { type: "doodle", name: "yellow-spots" },
        {
          type: "text",
          text: "makasih uda bikin",
          spans: [
            { text: "makasih", className: "circled-yellow" },
            { text: " uda bikin" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "hidup aku lebih happy,",
          className: "handwritten",
        },
        {
          type: "text",
          text: "with everything about",
          className: "handwritten",
        },
        {
          type: "text",
          text: "aku beruntung banget",
          spans: [
            { text: "aku " },
            { text: "beruntung", className: "circled-yellow" },
            { text: " banget" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "udah ketemu kamu!! ,",
          className: "handwritten",
        },
        {
          type: "text",
          text: "kenal kamu . I m also",
          className: "handwritten",
        },
        {
          type: "text",
          text: "very lucky to have",
          spans: [
            { text: "very " },
            { text: "lucky to have", className: "underlined-yellow" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "I love you Infinitely",
          className: "handwritten",
        },
        { type: "doodle", name: "yellow-hearts-bottom" },
      ],
    },
  },
  {
    id: 7,
    front: {
      template: "lined",
      pageClass: "page-12",
      lines: [
        {
          type: "text",
          text: "Love you",
          className: "handwritten center-txt large",
        },
        {
          type: "image",
          src: kucing1,
          className: "doodle-image",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-13",
      lines: [
        {
          type: "text",
          text: "Mengetahui",
          spans: [{ text: "Mengetahui", className: "underlined-red" }],
          className: "handwritten",
        },
        { type: "text", text: "Segala kegiatan", className: "handwritten" },
        { type: "text", text: "kamu. aku tau", className: "handwritten" },
        { type: "text", text: "bahwa Semua yang", className: "handwritten" },
        {
          type: "text",
          text: "dilakukan pasti rasanya",
          className: "handwritten",
        },
        {
          type: "text",
          text: "Capek .",
          spans: [
            { text: "Capek", className: "underlined-red" },
            { text: " ." },
          ],
          className: "handwritten",
        },
        { type: "text", text: "tapi kamu kuat !", className: "handwritten" },
        { type: "doodle", name: "circled-red-hebat" },
        {
          type: "image",
          src: doodle1,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 8,
    front: {
      template: "lined",
      pageClass: "page-14",
      lines: [
        { type: "doodle", name: "cat" },
        {
          type: "text",
          text: "kalo ada apa-apa",
          className: "handwritten ",
        },
        {
          type: "text",
          text: "cerita ya...",
          className: "handwritten ",
        },
        {
          type: "text",
          text: "kamu boleh cari aku",
          spans: [
            { text: "kamu ", className: "pink-highlight" },
            { text: "boleh cari aku" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "kapan aja.",
          className: "handwritten",
        },
        {
          type: "image",
          src: doodle2,
          className: "doodle-image",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-15",
      lines: [
        {
          type: "text",
          text: "Bumi memiliki banyak",
          spans: [
            { text: "Bumi memiliki banyak", className: "green-highlight" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "orang HEBAT",
          spans: [{ text: "orang HEBAT", className: "green-highlight" }],
          className: "handwritten",
        },
        {
          type: "text",
          text: "kamu Salah Satunya.",
          spans: [
            { text: "kamu Salah Satunya.", className: "green-highlight" },
          ],
          className: "handwritten",
        },
        {
          type: "image",
          src: bumi,
          className: "doodle-image",
        },
      ],
    },
  },
  {
    id: 9,
    front: {
      template: "lined",
      pageClass: "page-16",
      lines: [
        {
          type: "text",
          text: "you're the",
          className: "handwritten center-txt large",
        },
        {
          type: "text",
          text: "only Person",
          className: "handwritten center-txt large",
        },
        {
          type: "text",
          text: "i want",
          className: "handwritten center-txt extra-large",
        },
        { type: "doodle", name: "textured-heart", text: "~ 7arzz" },
        {
          type: "image",
          src: doodle3,
          className: "doodle-image",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-17",
      lines: [
        { type: "doodle", name: "sun-cat" },
        {
          type: "text",
          text: "kalok ada",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "1000 masalah datang",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "kamu harus Punya",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "milyaran cara buat",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "selesaiin ya...",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "ada aku yang",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "selalu siap mendukungmu",
          className: "handwritten pink-highlight",
        },
        {
          type: "text",
          text: "dimanapun & kapanpun",
          className: "handwritten pink-highlight",
        },
        { type: "doodle", name: "flower-stickers" },
      ],
    },
  },
  {
    id: 10,
    front: {
      template: "lined",
      pageClass: "page-18",
      lines: [
        { type: "doodle", name: "side-heart" },
        {
          type: "text",
          text: "Sejauh apapun",
          className: "handwritten indent-1",
        },
        { type: "text", text: "kalau kita", className: "handwritten indent-2" },
        { type: "text", text: "Punya rasa", className: "handwritten indent-3" },
        { type: "text", text: "dan doa", className: "handwritten indent-4" },
        { type: "text", text: "yang Sama", className: "handwritten indent-5" },
        { type: "text", text: "besar itu", className: "handwritten indent-4" },
        { type: "text", text: "gak akan", className: "handwritten indent-3" },
        { type: "text", text: "berat menjalaninya", className: "handwritten" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-19",
      lines: [
        { type: "text", text: "Kamu berhasil", className: "handwritten" },
        { type: "text", text: "buat aku menjadi", className: "handwritten" },
        { type: "text", text: "diri Sendiri , dan", className: "handwritten" },
        { type: "text", text: "aku merasa Sangat", className: "handwritten" },
        {
          type: "text",
          text: "dicintai dengan hebat oleh mu.",
          className: "handwritten",
        },
        { type: "doodle", name: "tulip" },
      ],
    },
  },
  {
    id: 11,
    front: {
      template: "lined",
      pageClass: "page-20",
      lines: [
        {
          type: "text",
          text: "Jatuh cinta Sama",
          spans: [
            { text: "Jatuh cinta " },
            { text: "Sama", className: "underlined-red" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "kamu adalah ketidak-",
          spans: [
            { text: "kamu", className: "underlined-red" },
            { text: " " },
            { text: "adalah", className: "underlined-red" },
            { text: " ketidak-" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "Sengajaan yang lebih",
          className: "handwritten",
        },
        {
          type: "text",
          text: "indah dari ribuan",
          spans: [
            { text: "indah dari " },
            { text: "ribuan", className: "underlined-red" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "hal yang Pernah",
          spans: [
            { text: "hal", className: "underlined-red" },
            { text: " yang Pernah" },
          ],
          className: "handwritten",
        },
        { type: "text", text: "aku rencanakan", className: "handwritten" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-21",
      lines: [
        { type: "doodle", name: "orange-bg-top" },
        {
          type: "text",
          text: "Aku Suka weekend",
          spans: [
            { text: "Aku Suka " },
            { text: "weekend", className: "underlined-orange-thick" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "tapi lebih Suka lagi",
          className: "handwritten",
        },
        {
          type: "text",
          text: "with you till the end.",
          spans: [
            {
              text: "with you till the end.",
              className: "underlined-orange-thick",
            },
          ],
          className: "handwritten",
        },
        { type: "br" },
        {
          type: "text",
          text: "I'm proud of you",
          spans: [
            { text: "I'm " },
            { text: "proud", className: "wavy-orange" },
            { text: " of you" },
          ],
          className: "handwritten",
        },
        { type: "doodle", name: "orange-bg-bottom" },
      ],
    },
  },
  {
    id: 12,
    front: {
      template: "lined",
      pageClass: "page-22",
      lines: [
        { type: "doodle", name: "red-hearts-corner" },
        { type: "text", text: "Everything is", className: "handwritten" },
        { type: "text", text: "So much", className: "handwritten indent-1" },
        {
          type: "text",
          text: "more Perfect",
          className: "handwritten indent-2",
        },
        { type: "text", text: "when", className: "handwritten indent-3" },
        {
          type: "text",
          text: "I'm with you",
          className: "handwritten indent-2",
        },
        { type: "doodle", name: "ghost-flower" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-23",
      lines: [
        {
          type: "text",
          text: "kenapa permen karet",
          className: "handwritten",
        },
        {
          type: "text",
          text: "manis di awal???",
          spans: [
            { text: "manis", className: "pink-highlight" },
            { text: " di awal???" },
          ],
          className: "handwritten indent-1",
        },
        {
          type: "text",
          text: "karena klo ",
          className: "handwritten",
        },
        {
          type: "text",
          text: "manis terus itu kamu",
          spans: [
            { text: "manis terus  ", className: "circled-blue" },
            { text: "itu kamu" },
          ],
          className: "handwritten indent-2",
        },
        { type: "doodle", name: "ghost-blush" },
      ],
    },
  },
  {
    id: 13,
    front: {
      template: "lined",
      pageClass: "page-24",
      lines: [
        {
          type: "text",
          text: "Everything is So much",
          className: "handwritten",
        },
        { type: "text", text: "more Perfect when", className: "handwritten" },
        {
          type: "text",
          text: "I'm with you ❤",
          spans: [
            { text: "I'm with you " },
            { text: "❤", className: "red-heart-inline" },
          ],
          className: "handwritten",
        },
        { type: "br" },
        { type: "text", text: "kamu bisa kok", className: "handwritten" },
        { type: "text", text: "lewatin Proses", className: "handwritten" },
        { type: "text", text: "hidup ini dengan", className: "handwritten" },
        { type: "text", text: "Pelan - Pelan", className: "handwritten" },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-25",
      lines: [
        { type: "doodle", name: "purple-hearts-bg-top" },
        { type: "doodle", name: "purple-cloud", text: "Singkat Saja" },
        {
          type: "text",
          text: "aku ingin bersamamu",
          spans: [
            { text: "aku ingin " },
            { text: "bersamamu", className: "underlined-purple-thick" },
          ],
          className: "handwritten",
        },
        {
          type: "text",
          text: "kapanpun",
          spans: [{ text: "kapanpun", className: "underlined-purple-thick" }],
          className: "handwritten indent-2",
        },
        { type: "text", text: "dan", className: "handwritten indent-3" },
        {
          type: "text",
          text: "dimanapun",
          spans: [{ text: "dimanapun", className: "underlined-purple-thick" }],
          className: "handwritten indent-2",
        },
        { type: "br" },
        {
          type: "text",
          text: "@ jika jodoh",
          spans: [
            { text: "@ jika jodoh", className: "underlined-purple-thick" },
          ],
          className: "handwritten indent-4",
        },
        { type: "doodle", name: "purple-hearts-bg-bottom" },
      ],
    },
  },
  {
    id: 14,
    front: {
      template: "lined",
      pageClass: "page-26",
      lines: [
        {
          type: "text",
          text: "Thank you",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "for Still want to",
          className: "handwritten center-txt",
        },
        {
          type: "text",
          text: "Stay with me",
          className: "handwritten center-txt",
        },
      ],
    },
    back: {
      template: "lined",
      pageClass: "page-27",
      lines: [
        {
          type: "text",
          text: "Selamat menjadi manusia",
          className: "handwritten",
        },
        { type: "text", text: "dewasa yang dimana", className: "handwritten" },
        { type: "text", text: "kamu akan bertemu", className: "handwritten" },
        {
          type: "text",
          text: "lebih banyak, masalah .",
          className: "handwritten",
        },
        {
          type: "text",
          text: "Jangan lupa ucap",
          className: "handwritten indent-1",
        },
        {
          type: "text",
          text: "trimakasih pada dirimu",
          className: "handwritten",
        },
        {
          type: "text",
          text: "Sendiri , karena Sudah",
          className: "handwritten",
        },
        { type: "text", text: "Sampai dititik ini", className: "handwritten" },
      ],
    },
  },
  {
    id: 15,
    front: {
      template: "lined",
      pageClass: "page-28",
      lines: [
        { type: "text", text: "Hai . . . .", className: "handwritten" },
        {
          type: "text",
          text: "Aku cuman mau bilang . . .",
          className: "handwritten",
        },
        {
          type: "text",
          text: "misal jika , Dunia",
          className: "handwritten indent-1",
        },
        {
          type: "text",
          text: "tidak berpihak ke kamu",
          className: "handwritten",
        },
        {
          type: "text",
          text: "aku bakal Selalu tetap",
          className: "handwritten",
        },
        { type: "text", text: "ada buat kamu .", className: "handwritten" },
        {
          type: "text",
          text: "Jangan sungkan buat",
          className: "handwritten indent-1",
        },
        { type: "text", text: "cerita yak . . . .", className: "handwritten" },
        { type: "br" },
        {
          type: "text",
          text: "AKU INGIN Jadi",
          className: "handwritten uppercase",
        },
        {
          type: "text",
          text: "RUMAH MU :)",
          spans: [
            { text: "RUMAH MU " },
            { text: ":)", className: "smiley-small" },
          ],
          className: "handwritten uppercase",
        },
      ],
    },
    back: {
      template: "blank",
    },
  },
  {
    id: 16,
    front: {
      template: "final",
      text: "You are my today and\nall of my tomorrows.",
      doodle: "❤",
    },
    back: {
      template: "cover",
      className: "end-cover",
      label: "Forever & Always",
      showRestart: true,
      buttonText: "Restart Our Journey",
    },
  },
];

/**
 * TUTORIAL PENGGUNAAN data.js
 * --------------------------
 * Jurnal ini terdiri dari kumpulan "paper" (kertas).
 * Setiap paper memiliki 'front' (halaman kanan saat dibuka) dan 'back' (halaman kiri saat dibuka).
 *
 * 1. TEMPLATE Halaman:
 *    - 'cover': Untuk sampul kulit. Gunakan 'title' untuk nama jurnal.
 *    - 'lined': Halaman kertas bergaris standar untuk tulisan tangan.
 *    - 'blank': Halaman kosong (biasanya untuk bagian dalam sampul).
 *    - 'final': Halaman sampul kulit khusus dengan tombol restart dan pesan penutup.
 *
 * 2. STRUKTUR BARIS (lines):
 *    Setiap baris dalam template 'lined' bisa berupa:
 *    - { type: 'text', text: 'isi teks', className: 'handwritten' }
 *    - { type: 'br' } -> Untuk baris kosong (jarak).
 *    - { type: 'doodle', name: 'nama-doodle' } -> Untuk gambar coretan.
 *    - { type: 'image', src: 'url-foto.jpg', className: 'opsional' } -> Untuk foto.
 *
 * 3. STYLE KHUSUS (spans):
 *    Gunakan 'spans' di dalam satu baris text jika ingin memberi warna atau efek pada kata tertentu:
 *    - className: 'underlined-red'       (Garis bawah merah)
 *    - className: 'underlined-blue'      (Garis bawah biru)
 *    - className: 'circled-purple'       (Lingkaran ungu)
 *    - className: 'pink-highlight'       (Stabilo pink)
 *    - className: 'blue-ink'             (Tinta biru)
 *
 * 4. DAFTAR DOODLE (name):
 *    - 'envelope' (Amplop cinta)
 *    - 'balloon' (Satu balon)
 *    - 'balloon-group' (Banyak balon)
 *    - 'flower' (Bunga simple)
 *    - 'cat' (Telinga kucing)
 *    - 'ghost-flower' (Hantu bawa bunga)
 *    - 'ghost-blush' (Hantu malu-malu)
 *    - 'earth-heart' (Bumi bentuk hati)
 *    - 'tulip' (Bunga tulip)
 *    - 'smiley-pink' (Emoticon senyum coretan)
 *
 * 5. PAGE CLASS:
 *    - 'center-txt': Teks berada di tengah.
 *    - 'indent-1' s/d 'indent-5': Menjorok ke dalam dengan jarak berbeda.
 */
