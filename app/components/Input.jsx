'use client';
import Image from 'next/image';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { signOut, useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '@/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

function Input() {
  const { data: session } = useSession();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  async function sendPost() {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, 'posts'), {
      id: session?.user?.uid,
      text: input,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    console.log(selectedFile);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, 'data_url').then(
        async snapshot => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, 'posts', docRef.id), { image: downloadURL });
        },
      );
    }
    setInput('');
    setSelectedFile(null);
    setLoading(false);
  }

  function addImagetoPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = readerEvent => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  if (!session) return;
  return (
    <div className='flex space-x-3 border-b border-gray-200 p-3'>
      <div>
        <Image
          onClick={signOut}
          src={
            session?.user?.image ||
            'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
          }
          alt='user'
          width={44}
          height={44}
          className='cursor-pointer rounded-full hover:brightness-95'
        />
      </div>

      <div className='w-full divide-y divide-gray-200'>
        <div className=''>
          <textarea
            value={input}
            className='min-h-[50px] w-full border-none text-lg tracking-wide text-gray-700 placeholder-gray-700 focus:ring-0'
            row='2'
            placeholder="What's happening?"
            onChange={e => setInput(e.target.value)}
          ></textarea>
        </div>
        {selectedFile && (
          <div className='relative'>
            <IoClose
              onClick={() => setSelectedFile(null)}
              size={28}
              className='absolute cursor-pointer rounded-full text-black shadow-md shadow-white'
            />
            <Image
              alt='preview'
              src={selectedFile}
              width={300}
              height={300}
              // style={{ height: 'auto' }}
              className={loading && 'animate-pulse'}
            />
          </div>
        )}
        <div className='items--center flex justify-between p-2.5'>
          {!loading && (
            <>
              {' '}
              <div className='flex'>
                <div className='' onClick={() => filePickerRef.current.click()}>
                  <HiOutlinePhotograph
                    size={28}
                    className='hover-effect p-2 text-sky-500 hover:bg-sky-100'
                  />
                  <input
                    onChange={addImagetoPost}
                    type='file'
                    hidden
                    ref={filePickerRef}
                  />
                </div>

                <BsEmojiSmile
                  size={28}
                  className='hover-effect p-2 text-sky-500 hover:bg-sky-100'
                />
              </div>
              <button
                onClick={sendPost}
                disabled={!input.trim()}
                className='rounded-full bg-blue-400 px-5 py-0 text-sm font-bold text-white shadow-md hover:brightness-95 disabled:opacity-50'
              >
                Post
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
