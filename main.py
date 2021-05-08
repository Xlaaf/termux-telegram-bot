import sys, time, os


def m(s):
    for c in s + '\n':
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(0.1)

os.system("clear")
print("""Installing""")
os.system("pkg install nodejs -y")
os.system("npm install")
os.system("npm audit fix")
os.system("npm install axios")
os.system("npm install telegraf@3")
print(""" Memulai Telegram Bot...""")
os.system("clear")
os.system("node index.js")
m("Selesai ୧(＾ 〰 ＾)୨")
