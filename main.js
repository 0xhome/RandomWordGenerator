var NumberOfWords = 50

var words = new BuildArray(NumberOfWords)

words[1] = "begrüßen > selamlamak"
words[2] = "buchstabieren > harf harf söylemek"
words[3] = "der Familienname > soyad,soyisim"
words[4] = "Hạllo! > Merhaba!"
words[5] = "die Herkunf > kök"
words[6] = "das Lạnd > ülke"
words[7] = "das Lẹrnziel > öğrenme amacı"
words[8] = "der Name > isim"
words[9] = "die Sprache > dil"
words[10] = "sprẹchen > konuşmak"
words[11] = "die Stạdt > şehir"
words[12] = "über > üzeri, üzerine"
words[13] = "ụnd > ve"
words[14] = "verạbschieden > vedalaşmak"
words[15] = "der Vorname > ad,isim"
words[16] = "vorstellen > kendini tanıtmak"
words[17] = "das Pọlnisch > Lehçe"
words[18] = "das Rụssisch > Rusça"
words[19] = "die Kụrsliste > kurs listesi"
words[20] = "aus > den/dan"
words[21] = "fragen > sormak"
words[22] = "Guten Tag! > iyi günler!"
words[23] = "heißen > adı ... olmak"
words[24] = "kọmmen > gelmek"
words[25] = "der Kụrs > kurs"

words[26] = "wie > nasıl"
words[27] = "woher > nereden"
words[28] = "der Deutschkurs > Almanca kursu"
words[29] = "der Dialog > diyalog"
words[30] = "ergänzen > tamamlamak"
words[31] = "Herr > bay"
words[32] = "hören > dinlemek"
words[33] = "in > de/da, te/ta"
words[34] = "die Sprache > dil"
words[35] = "der Kụrsleiter > kurs öğretmeni"
words[36] = "sein > olmak"
words[37] = "die Liste > liste"
words[38] = "machen > yapmak"
words[39] = "die Entschuldigung > özür"
words[40] = "die Frau > bayan"
words[41] = "mitlesen > beraber okumak"
words[42] = "der Tag > gün"
words[43] = "formell > resmi"
words[44] = "informell > gayri resmi"
words[45] = "oder > veya"
words[46] = "privat > özel"
words[47] = "der Akzent > vurgu"
words[48] = "die Aussprache > telaffuz"
words[49] = "die Melodie > melodi"
words[50] = "bitte > lütfen"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
